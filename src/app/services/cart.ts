import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: { product: Product, quantity: number }[] = [];

  constructor() { }

  getCart() {
    return this.cartItems;
  }

  addToCart(product: Product, quantity: number) {
    const existing = this.cartItems.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity = Number(existing.quantity) + Number(quantity);
    } else {
      this.cartItems.push({ product, quantity: Number(quantity) });
    }
    alert(`${product.name} added to cart!`);
  }

  removeItem(product: Product) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== product.id);
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  getTotalCost() {
    return this.cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }

  getItemCount() {
    return this.cartItems.reduce((acc, item) => acc + Number(item.quantity), 0);
  }
}
