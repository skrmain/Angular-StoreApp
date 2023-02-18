import { Component, OnInit } from "@angular/core";
import { CartService } from "../../cart.service";

@Component({
  selector: "user-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  cartProducts:any[] = [];
  baseImageUrl = "http://localhost:3000/images/";
  message:any;

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartService.getCartProducts().subscribe((result: any) => {
      this.cartProducts = result.cart;
    });
  }

  increQuant(productId:any) {
    this.cartService.addToCart(productId).subscribe((result: any) => {
      this.message = result.message;
      this.getCartProducts();
    });
  }

  decreQuant(productId:any) {
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

  onNewMessage(newMessage:any) {
    this.message = newMessage
  }
}
