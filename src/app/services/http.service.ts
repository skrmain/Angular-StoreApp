import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  baseUrl = `${environment.serverUrl}/`;

  get(url: string) {
    return this.http.get(url);
  }

  post(url: string, body: { [key: string]: any }) {
    return this.http.post(url, body);
  }

  put(url: string, body: { [key: string]: any }) {
    return this.http.put(url, body);
  }

  delete(url: string) {
    return this.http.delete(url);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }
}
