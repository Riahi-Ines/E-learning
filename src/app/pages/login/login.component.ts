import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/models/auth-request';
import { AuthResponse } from 'src/app/models/auth-response';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMsg: Array<string> = [];
  authRequest:AuthRequest={email:'',password:''}
  constructor(private router:Router,private authService:AuthService){

   }
  register() {
    this.router.navigate(['register']);
  }

  login() {
    this.errorMsg = [];
    this.authService.login(this.authRequest)
      .subscribe({
        next: (res:AuthResponse) => {
          this.router.navigate(['student']);
        },
        error: (err) => {
          if (err.error.validationErrors) {
            this.errorMsg = err.error.validationErrors;
          } else {
            this.errorMsg.push(err.error.errorMsg);//adds an error message from the "errorMsg" property of an "err" object to an array called "errorMsg".
          }
        }
      });
  }
}
