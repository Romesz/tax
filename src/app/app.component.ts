/*
TODO:
* Create a backend service for getting the data
* Calculate the result on change events
* Write unit and e2e test cases
* Use SASS or LESS instead of plain CSS
* Use Angular form builder
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  inputValue: number;
  calcInput: number;
  VATvalue: number;
  calcType: string;
  result: number;

  constructor() {
    // init value set
    this.VATvalue = 10;
    this.calcType = 'net';
  }

  calculate() {
    let taxAmount: number;
    this.calcInput = this.inputValue;
    if (this.calcType === 'gross') {
      taxAmount = this.inputValue * this.VATvalue / 100;
      this.result = this.inputValue + taxAmount;
    } else {
      taxAmount = this.inputValue - (this.inputValue * (100 / (100 + (1 * this.VATvalue))));
      this.result = this.inputValue - taxAmount;
      this.result = parseFloat(this.result.toFixed(2)); // parseFloat is necessary to avoid type error
    }
  }
}
