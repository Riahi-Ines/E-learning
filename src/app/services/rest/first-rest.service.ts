import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { StudentResponse } from './student-response';

@Injectable({
  providedIn: 'root'
})
export class FirstRestService {

  constructor(private http:HttpClient) { }

  findAllStudents() {
   // debugger //serves as a breakpoint, helping you inspect and understand your code as it runs.
    return this.http.get<StudentResponse>('http://localhost:8080/students');
  }
}
