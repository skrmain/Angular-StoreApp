import { Injectable } from '@angular/core';

// import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _http: HttpService) {}

  baseUrl = `carts/my`;

  getCartProducts() {
    return this._http.get(this.baseUrl);
  }

  createCart() {
    return this._http.post(this.baseUrl, {});
  }

  addToCart(productId: any) {
    return this._http.put(this.baseUrl, { productId });
  }

  removeFromCart(productId: any) {
    return this._http.delete(`${this.baseUrl}products/${productId}`);
  }

  emptyCart() {
    return this._http.delete(this.baseUrl);
  }
}
