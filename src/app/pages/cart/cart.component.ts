import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'user-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  cartProducts: any[] = [];
  baseImageUrl = `${environment.serverUrl}/images/`;
  message: any;

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartService.getCartProducts().subscribe(
      (result: any) => {
        this.cartProducts = result.data.products;
      },
      (error: any) => {
        this.cartService.createCart().subscribe((result) => {
          console.log('Cart Created');
        });
      }
    );
  }

  incrementQuantity(productId: any) {
    this.cartService.addToCart(productId).subscribe((result: any) => {
      this.message = result.message;
      this.getCartProducts();
    });
  }

  decreaseQuantity(productId: any) {
    this.cartService.removeFromCart(productId).subscribe((result: any) => {
      this.message = result.message;
      this.getCartProducts();
    });
  }

  emptyCart() {
    this.cartService.emptyCart().subscribe((result: any) => {
      this.message = result.message;
      this.getCartProducts();
    });
  }

  onNewMessage(newMessage: any) {
    this.message = newMessage;
  }
}
