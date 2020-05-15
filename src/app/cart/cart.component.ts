/* We use this ts script  to manage the cart. 
      Create by : Mohamed Boukricha
      Date : 14/05/2020
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; //Import FormBuilder from @angular/forms.

import { CartService } from '../cart.service'; //Import the CartService from the cart.service.ts file.


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
        private cartService: CartService, // Inject the CartService so that the cart component can use it.
        private formBuilder: FormBuilder, // Inject the FormBuilder.

  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
