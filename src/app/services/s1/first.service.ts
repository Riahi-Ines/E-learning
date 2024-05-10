import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }
  sum(n1:number,n2:number){
    return n1+n2;
  }
}
