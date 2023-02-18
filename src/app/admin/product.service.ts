import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  baseUrl = `${environment.serverUrl}/products/`;

  addProduct(product:any) {
    return this.http
      .post(this.baseUrl + "add", product)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }
}
