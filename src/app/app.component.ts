import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wage1 = 20000;
  taxfree = 10000
  taxpaid(): number {
    let tax = (this.wage1 - this.taxfree) * 0.2;
    return (tax < 0) ? 0 : tax;
  }
}
