import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirstService } from 'src/app/services/s1/first.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[FirstService],
})
export class LoginComponent {
  constructor(private router:Router){

   }
  register() {
    this.router.navigate(['register']);
    }
}
