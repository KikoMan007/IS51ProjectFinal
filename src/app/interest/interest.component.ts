import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  principal = 0;
  interestRate = 0;
  period = 0;
  time = 0;
  endingBalance = 0;
  totalInterest = 0;

  constructor() {

  }

  ngOnInit() {
  }

  reset() {
    this.principal = 0;
    this.interestRate = 0;
    this.period = 0;
    this.time = 0;
    this.endingBalance = 0;
    this.totalInterest = 0;


  }
  compoundInterest() {
    this.reset();


    const rate = this.interestRate / 100;
    const base = 1 + rate;
    console.log('base', base);
    const exponent = (this.time);
    console.log('exponent', exponent);
    this.totalInterest = this.principal * Math.pow(base, exponent);
    console.log('total interest', this.totalInterest);
    this.endingBalance = this.principal + this.totalInterest;
    console.log('ending', this.endingBalance);
  }

}
