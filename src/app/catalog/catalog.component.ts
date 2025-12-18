import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { CartService } from '../cart/cart.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-catalog',
    standalone: true,
    templateUrl: './catalog.component.html',
    styleUrl: './catalog.component.css',
    imports: [CommonModule, ProductDetailsComponent, RouterLink, RouterLinkActive]
})
export class CatalogComponent implements OnInit {

  products: Product[] = [];

  @Input()
  myValue : string = "";
  filter: string = ""

  constructor(
    private cartService: CartService, 
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute){  
  }

  addToCart(product: Product){
    this.cartService.addToCart(product)
    this.router.navigate(['/cart'])
  }

  
  ngOnInit(): void {
     this.productService.getProductsList().subscribe(products => {
      console.log("ngOnInit products :" +products.toString())
      this.products = products
    }) 

    this.route.queryParams.subscribe((params)=>{
      this.filter = params['filter'] ?? '';
    })

    
    console.log("child OnInit is called ")
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
        (product: any) => product.category === this.filter
      );
  }
  
}
