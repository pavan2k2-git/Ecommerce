import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    //{ path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'products', component: ProductListComponent},
    { path: 'details/:id', component: ProductDetailComponent},
    { path: 'cart', component: CartComponent},
    { path: 'checkout', component: CheckoutComponent} 
];
 