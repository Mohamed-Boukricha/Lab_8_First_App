/* We use this ts script  to manage the caert service. 
      Create by : Mohamed Boukricha
      Date : 14/05/2020
*/


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []; //define an items property to store the array of the current products in the cart.
/* Define methods to add items to the cart, return cart items, and clear the cart items:

*/
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
   getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  constructor(
    private http: HttpClient
  ) { }

}
