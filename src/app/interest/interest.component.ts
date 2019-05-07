import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  principal: number;
  interestRate: number;
  period: number;
  time: number;
  endingBalance: number;
  totalInterest: number;

  constructor() {

  }

  ngOnInit() {
  }

  compoundInterest() {
    const rate = this.interestRate / 100;
    const base = this.principal * rate;
    console.log('base', base);
    const exponent = 1 * this.time;
    console.log('exponent', exponent);
    this.totalInterest = Math.pow(base, exponent);
    console.log('total interest', this.totalInterest);
    this.endingBalance = this.principal + this.totalInterest;
    console.log('ending', this.endingBalance);
  }

}
