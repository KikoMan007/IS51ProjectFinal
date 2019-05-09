import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inflation',
  templateUrl: './inflation.component.html',
  styleUrls: ['./inflation.component.css']
})
export class InflationComponent implements OnInit {

  principal = 0;
  net = 0;
  difference = 0;
  endingBalance = 0;
  percentage = 0;





  constructor() { }

  ngOnInit() {

  }
  reset() {
    this.principal = 0;
    this.net = 0;
    this.difference = 0;
    this.endingBalance = 0;
    this.percentage = 0;

  }

  inflationFormula() {


    const difference = this.net - this.principal;
    console.log('difference', difference);
    const percentage = this.difference / this.principal;
    console.log('percentage', percentage);
    const endingBalance = this.percentage * 100;
    console.log('endingBalance', endingBalance);

  }







}



