/* We use this ts script  to manage the app-shipping component. 
      Create by : Mohamed Boukricha
      Date : 14/05/2020
*/

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
shippingCosts;
constructor(private cartService: CartService) { }

  ngOnInit() {
this.shippingCosts = this.cartService.getShippingPrices();
  }

}
