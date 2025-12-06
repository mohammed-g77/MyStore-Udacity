import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css'],
  standalone: false
})
export class ProductItem {
  @Input() product!: Product;
  @Output() addedToCart = new EventEmitter<{product: Product, quantity: number}>();
  quantity: number = 1;
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  updateQuantity(newQuantity: number) {
    this.quantity = newQuantity;
  }

  addToCart() {
    this.addedToCart.emit({ product: this.product, quantity: this.quantity });
  }
}
