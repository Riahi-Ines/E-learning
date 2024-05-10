import { Component } from '@angular/core';
import { FirstService } from './services/s1/first.service';
import { FirstRestService } from './services/rest/first-rest.service';
import { StudentResponse } from './services/rest/student-response';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-learning';
  result: number=0;
  constructor(private myservice:FirstService,private firstRestService:FirstRestService){

  }

   calculate() {
      this.firstRestService.findAllStudents().subscribe({
      next: (res:any)=>{
        console.log('Rest call result recieved');
        console.log(res);
      },
      error: (err:any)=>{
        console.log('Rest call error');
        console.log(err);

      },
      complete:()=>{
        console.log('Rest call done');
      }
      
    });
    this.result=this.myservice.sum(Math.random(),5);
   }

   async asyncCall(){
    //promise
   // const res = this.firstRestService.findAllStudents().toPromise();
    const res = await lastValueFrom (this.firstRestService.findAllStudents());//some as toPromise
    this.result=this.myservice.sum(Math.random(),5);
   }

}
