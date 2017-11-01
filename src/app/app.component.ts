/*
TODO:
* Create a backend service for getting the data
* Calculate the result on change events
* Write unit and e2e test cases
* Use SASS or LESS instead of plain CSS
* Use Angular form builder
*/

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { VatService } from './services/vat-service';
import { TaxData } from './model/tax-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit {
  inputValue: number;
  calcInput: number;
  VATs: Array<number>;
  calcTypes: Array<string>;
  VATvalue: number;
  calcType: string;
  result: number;

  constructor(private vatService: VatService) { }

  ngOnInit() {
    this.loadVATs();
  }

  loadVATs() {
    this.vatService.getVats().subscribe(
      (data: TaxData) => {
        this.VATs = data.VATs;
        this.VATvalue = data.VATdefault;
        this.calcTypes = data.calcTypes;
        this.calcType = data.calcDefault;
      },
      err => {
        console.log(err);
      });
  }

  calculate() {
    let taxAmount: number;
    this.calcInput = this.inputValue;
    if (this.calcType === 'Gross') {
      taxAmount = this.inputValue * this.VATvalue / 100;
      this.result = this.inputValue + taxAmount;
    } else {
      taxAmount = this.inputValue - (this.inputValue * (100 / (100 + (1 * this.VATvalue))));
      this.result = this.inputValue - taxAmount;
      this.result = parseFloat(this.result.toFixed(2)); // parseFloat is necessary to avoid type error
    }
  }
}
