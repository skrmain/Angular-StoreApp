import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product, ProductService } from 'src/app/services/product.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'user-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  message: any;

  product?: Product;
  baseImageUrl = `${environment.serverUrl}/images/`;

  ngOnInit() {
    this.activeRoute.params.subscribe((result: any) => {
      this.productService.getProduct(result.productId).subscribe({
        next: (result2) => {
          this.product = result2.data;
        },
        // error: (err) => {
        //   console.log('Error', err);
        //   // alert("Error Occurred Login Again");
        //   // this.authService.removeToken();
        //   // this.router.navigate(["/login"]);
        // }
      });
    });
  }

  addToCart(productId: any) {
    this.cartService.addToCart(productId).subscribe((result: any) => {
      this.message = result.message;
    });
  }
}
