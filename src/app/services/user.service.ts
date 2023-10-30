import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Response } from './types';

export interface User {
  _id: string;
  name: string;
  email: string;
  status: string; // TODO:
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpService) {}

  getUserDetail(): Observable<Response<{ user: User }>> {
    return this.http.get(`users/me`);
  }
}

const d = {};
