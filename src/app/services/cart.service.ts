import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];

  getCartItems(): Product[] {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    this.cartItems.push(product);
  }

  removeFromCart(product: Product): void {
    this.cartItems = this.cartItems.filter(p => p.id !== product.id);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
