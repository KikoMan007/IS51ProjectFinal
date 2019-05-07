import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { InterestComponent } from './interest/interest.component';
import { InflationComponent } from './inflation/inflation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../material-design/material-design.module';

import { AppRoutes } from './app.routes';
import { BondGrowthComponent } from './bond-growth/bond-growth.component';
import { RuleSeventwoComponent } from './rule-seventwo/rule-seventwo.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainContentComponent,
    InterestComponent,
    InflationComponent,
    BondGrowthComponent,
    RuleSeventwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    AppRoutes,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
