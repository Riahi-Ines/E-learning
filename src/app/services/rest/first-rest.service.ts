import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { StudentResponse } from './student-response';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirstRestService {
  baseUrl = environment.app.baseUrl;
  constructor(private http:HttpClient) { }

  findAllStudents() {
   // debugger //serves as a breakpoint, helping you inspect and understand your code as it runs.
    return this.http.get<StudentResponse>(`${this.baseUrl}/students`);
  }
}
