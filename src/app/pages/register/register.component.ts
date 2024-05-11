import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/models/register-request';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errorMsg: Array<string> = [];
  registerRequest: RegisterRequest = {email: '', firstname: '', lastname: '', password: ''};
  constructor(private router:Router,private authService: AuthService){
  }
  login() {
  this.router.navigate(['login']);
  }
  register() {
    this.errorMsg = [];
    this.authService.register(this.registerRequest)
      .subscribe({
        next: () => {
          this.router.navigate(['login']);
        },
        error: (err) => {
          this.errorMsg = err.error.validationErrors;
        }
      });
  }

}
