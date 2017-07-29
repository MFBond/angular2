import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gross1 = 15000;
  gross2 = 20000;
  grossdiff: number;
  tax1: number;
  tax2: number;
  taxdiff: number;
  ni1: number;
  ni2: number;
  nidiff: number;
  net1: number;
  net2: number;
  netdiff: number;

  constructor() {
    this.calculate();
  }

  calculate() {
    this.tax1 = this.tax(this.gross1);
    this.tax2 = this.tax(this.gross2);
    this.ni1 = this.ni(this.gross1);
    this.ni2 = this.ni(this.gross2);
    this.net1 = this.net(this.gross1);
    this.net2 = this.net(this.gross2);
    this.grossdiff = this.gross2 - this.gross1;
    this.taxdiff = this.tax2 - this.tax1;
    this.nidiff = this.ni2 - this.ni1;
    this.netdiff = this.net2 - this.net1;
  }

  tax(gross): number {
    let basic = gross - 11500;
    if (basic > 33499) basic = 33499;
    let higher = gross - 45000;
    if (higher > 104999) higher = 104999;
    let additional = gross - 150000; 

    let tax = 0;
    if (basic > 0) tax += basic * 0.2;
    if (higher > 0) tax += higher * 0.4;
    if (additional > 0) tax += additional * 0.45;

    return tax;
  }

  ni(gross): number {
    let ni = (gross - 8164) * 0.12;
    return (ni < 0) ? 0 : ni;
  }

  net(gross): number {
    return gross - this.tax(gross) - this.ni(gross);
  }
}
