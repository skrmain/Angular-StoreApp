import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private _baseUrl = `${environment.serverUrl}/`;

  get(url: string): Observable<any> {
    return this.http
      .get(this._baseUrl + url)
      .pipe(catchError(this.handleError));
  }

  post(url: string, body: { [key: string]: any }): Observable<any> {
    return this.http
      .post(this._baseUrl + url, body)
      .pipe(catchError(this.handleError));
  }

  put(url: string, body: { [key: string]: any }): Observable<any> {
    return this.http
      .put(this._baseUrl + url, body)
      .pipe(catchError(this.handleError));
  }

  delete(url: string): Observable<any> {
    return this.http
      .delete(this._baseUrl + url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
