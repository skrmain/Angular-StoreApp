import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from './http.service';
import { Response } from './types';

export interface AuthTokens {
  refresh: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpService) {}

  registerUser(user: any): Observable<Response<{}>> {
    return this.http.post('register', user);
  }

  loginUser(user: any): Observable<Response<AuthTokens>> {
    return this.http.post('login', user);
  }

  saveToken(token: any) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  checkToken() {
    return !!localStorage.getItem('token');
  }
}
