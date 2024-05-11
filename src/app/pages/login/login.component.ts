import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/models/auth-request';
import { AuthResponse } from 'src/app/models/auth-response';
import { TokenService } from 'src/app/modules/app-common/services/token/token.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMsg: Array<string> = [];
  authRequest:AuthRequest={email:'',password:''}
  constructor(private router:Router,private authService:AuthService,private tokenService:TokenService){

   }
  register() {
    this.router.navigate(['register']);
  }

  login() {
    this.errorMsg = [];
    this.authService.login(this.authRequest)
      .subscribe({
        next: (res:AuthResponse) => {
          //localStorage.setItem('token',res.token as string)//cast
          this.tokenService.token = res.token as string;
          this.redirectConnectedUser();
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

  private redirectConnectedUser() {
    if (this.tokenService.isStudent()) {
      this.router.navigate(['student']);
    } else if (this.tokenService.isTeacher()) {
      this.router.navigate(['teacher']);
    }
  }

}
