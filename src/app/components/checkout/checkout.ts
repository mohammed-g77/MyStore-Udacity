import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css'],
  standalone: false
})
export class Checkout implements OnInit {
  name: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const total = this.cartService.getTotalCost();
    this.cartService.clearCart();
    this.router.navigate(['/success'], { queryParams: { name: this.name, total: total } });
  }
}
