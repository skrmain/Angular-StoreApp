import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpService) {}

  baseUrl = `${environment.serverUrl}/products/`;

  getProducts() {
    return this.http.get(this.baseUrl).pipe(catchError(this.handleError));
  }

  getProduct(productId: any) {
    return this.http.get(this.baseUrl + '/' + productId);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }

  baseUrl2 = `${environment.serverUrl}/cart/`;
  addToCart(productId: any) {
    return this.http.post(this.baseUrl2, { productId: productId });
  }
}
