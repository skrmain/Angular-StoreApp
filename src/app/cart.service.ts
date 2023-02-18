import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}

  baseUrl = `${environment.serverUrl}/cart/`;

  getCartProducts() {
    return this.http.get(this.baseUrl);
  }

  addToCart(productId:any) {
    return this.http.post(this.baseUrl + "add", { productId });
  }

  removeFromCart(productId:any) {
    return this.http.post(this.baseUrl + "remove", { productId });
  }

  emptyCart() {
    return this.http.delete(this.baseUrl + "empty");
  }
}
