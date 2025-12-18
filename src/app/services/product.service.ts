import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
  {
    id: 1,
    productTitle: 'Laptop',
    productPrice: 1200,
    category: 'tablet',
    productImage: 'assets/images/laptop.png'
  },
  {
    id: 2,
    productTitle: 'Phone',
    productPrice: 800,
    category: 'phone',
    productImage: 'assets/images/phone.png'
  },
  {
    id: 3,
    productTitle: 'Smart TV',
    productPrice: 2000,
    category: 'smarttv',
    productImage: 'assets/images/tv.png'
  }
];

  getProductsList(): Observable<Product[]> {
    return of(this.products);
  }
}