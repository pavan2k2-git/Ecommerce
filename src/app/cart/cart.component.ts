import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { CartIconComponent } from '../../cart-icon/cart-icon.component';
 

@Component({
  selector: 'app-cart',
  imports: [CommonModule, MatCardModule, FormsModule, MatCheckbox],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  #cartService = inject(CartService);

  cartItems: any[] = [];

  count : any = 0;

  ngOnInit(): void {

    this.cartItems = this.#cartService.getCartItems();
    this.count = this.#cartService.getCartItemCount();
  }

  clearCart(){
    this.#cartService.removeSelectedItems();
    this.cartItems = [];
  }

  removeSelectedItems(){
    this.#cartService.removeSelectedItems();
    this.cartItems = this.cartItems.filter(item => !item.isSelected);
  }
}
