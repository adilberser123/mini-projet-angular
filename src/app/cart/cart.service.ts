import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:3000/api';

  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<Product[]>(`${this.baseUrl}/cart`).subscribe(cart => {
      this.cart = cart;
      this.cartSubject.next([...this.cart]); // 🔥 notify UI
    });
  }

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartSubject.next([...this.cart]); // 🔥 instant UI update

    this.http.post(`${this.baseUrl}/cart`, this.cart).subscribe(() => {
      console.log(`product ${product.productTitle} added`);
    });
  }

  remove(product: Product) {
    this.cart = this.cart.filter(p => p.id !== product.id); // ✅ FIXED
    this.cartSubject.next([...this.cart]); // 🔥 instant UI update

    this.http.post(`${this.baseUrl}/cart`, this.cart).subscribe(() => {
      console.log(`removed ${product.id}`);
    });
  }
}
