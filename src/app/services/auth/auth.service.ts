import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest } from 'src/app/models/auth-request';
import { AuthResponse } from 'src/app/models/auth-response';
import { RegisterRequest } from 'src/app/models/register-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl : string = 'http//localhost:8080';
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
