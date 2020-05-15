/* We use this ts script  to handle the product alerts. 
      Create by : Mohamed Boukricha
      Date : 14/05/2020
*/

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; // import Input from @angular/core.
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
@Input() product; // we define a property named product with an @Input() decorator.
@Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
