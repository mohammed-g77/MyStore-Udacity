import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  standalone: false
})
export class Cart implements OnInit {
  cartItems: { product: Product, quantity: number }[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartService.getTotalCost();
  }

  updateQuantity(item: { product: Product, quantity: number }, quantity: number) {
    const newQuantity = Number(quantity);
    if (newQuantity === 0) {
      this.removeItem(item);
    } else {
      item.quantity = newQuantity;
      this.calculateTotal();
    }
  }

  removeItem(item: { product: Product, quantity: number }) {
    this.cartItems = this.cartService.removeItem(item.product);
    this.calculateTotal();
    alert(`${item.product.name} removed from cart.`);
  }
}
