/* We use this ts script  to manage the product-details. 
      Create by : Mohamed Boukricha
      Date : 14/05/2020
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute from the @angular/router package 

import { products } from '../products'; // import products array from ../products
import { CartService } from '../cart.service'; // import CartService from ../cart.service

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
   constructor(
    private route: ActivatedRoute, // inject the ActivatedRoute into the constructor by adding it as an argument within the constructor's parentheses.
    private cartService: CartService // // inject the CartService into the constructor by adding it as an argument within the constructor's parentheses.
  ) { }
/*Define the addToCart() method, which adds the current product to the cart.*/
addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() { // In the ngOnInit() method, subscribe to route parameters and fetch the product based on the productId.
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  })
  }
 

}
