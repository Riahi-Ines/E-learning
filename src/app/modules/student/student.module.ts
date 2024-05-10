import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { FirstService } from 'src/app/services/s1/first.service';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
 // providers:[FirstService]
})
export class StudentModule { }
