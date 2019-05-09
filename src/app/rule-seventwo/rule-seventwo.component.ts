import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rule-seventwo',
  templateUrl: './rule-seventwo.component.html',
  styleUrls: ['./rule-seventwo.component.css']
})
export class RuleSeventwoComponent implements OnInit {

  years = 0;
  interestRate = 0;
  seventyTwo = 72;
  endingBalance = 0;



  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.years = 0;
    this.interestRate = 0;
    this.seventyTwo = 72;
    this.endingBalance = 0;

  }




  seventyTwoRule() {

    this.reset();

    const years = this.interestRate / this.seventyTwo;
    console.log ('years' , years);
    this.endingBalance = (years);


  }



}
