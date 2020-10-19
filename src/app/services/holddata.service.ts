import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoldDataService {

  causeTemp = [];
  constructor() { }

  //  get data from localStorage
  getCause() {
    const myData = JSON.parse(localStorage.getItem('CauseTemp'));
    return this.causeTemp = myData;
  }

  // set data to localStorage
  setCause(value) {
    localStorage.setItem('CauseTemp', JSON.stringify(value));
    this.causeTemp = value;
  }
}
