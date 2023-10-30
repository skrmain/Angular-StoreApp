import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from './http.service';
import { Response } from './types';

export interface Image {
  name: string;
  size: number;
  mimetype: 'image/png';
  buffer: string;
  _id: string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  brand: string;
  category: string;
  description: string;
  images: Image[];
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  path = `products/`;
  constructor(private http: HttpService) {}

  getProducts(): Observable<Response<Product[]>> {
    return this.http.get(this.path);
  }

  getProduct(productId: string): Observable<Response<Product>> {
    return this.http.get(`${this.path}/${productId}`);
  }
}
