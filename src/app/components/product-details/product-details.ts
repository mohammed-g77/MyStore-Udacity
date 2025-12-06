import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
  standalone: false
})
export class ProductDetails implements OnInit {
  product: Product | undefined;
  quantity: number = 1;
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProduct(id).subscribe(data => {
      this.product = data;
    });
  }

  updateQuantity(newQuantity: number) {
    this.quantity = newQuantity;
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
    }
  }
}
