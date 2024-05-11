import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest } from 'src/app/models/auth-request';
import { AuthResponse } from 'src/app/models/auth-response';
import { RegisterRequest } from 'src/app/models/register-request';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.app.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  register(registerRequest: RegisterRequest) {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, registerRequest);
  }

  login(loginRequest: AuthRequest) {
   return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, loginRequest);//return token
  }
}
