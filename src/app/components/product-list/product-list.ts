import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  standalone: false
})
export class ProductList implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService, 
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.cdr.detectChanges(); // Manually trigger change detection
      },
      error: (err) => {
        console.error('Error loading products:', err);
      }
    });
  }

  addToCart(event: {product: Product, quantity: number}) {
    this.cartService.addToCart(event.product, event.quantity);
  }
}
