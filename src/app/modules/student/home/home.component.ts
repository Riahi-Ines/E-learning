import { Component } from '@angular/core';
import { FirstService } from 'src/app/services/s1/first.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private myservice:FirstService){

  }

   result: number=0;

   calculate() {
    this.result=this.myservice.sum(3,5);
   }
}
