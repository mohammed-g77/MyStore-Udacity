import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';
import { Cart } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';
import { Confirmation } from './components/confirmation/confirmation';

const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'products/:id', component: ProductDetails },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: 'success', component: Confirmation },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
