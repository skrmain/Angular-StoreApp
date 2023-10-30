import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

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
    // .pipe(catchError(error => EMPTY));
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

  private handleError = (error: HttpErrorResponse) => {
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

    this.messageService.send(error.error.message);
    // Return an observable with a user-facing error message.
    return throwError(
      () =>
        new Error(
          error.error.message ||
            'Something bad happened; please try again later.'
        )
    );
  };
}
