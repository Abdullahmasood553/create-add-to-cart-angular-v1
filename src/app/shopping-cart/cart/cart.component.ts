import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // { id: 1, productId: 1, productName: 'Test One', qty: 4, price: 100 },
    // { id: 2, productId: 2,  productName: 'Test Two', qty: 8, price: 200 },
    // { id: 3, productId: 3,  productName: 'Test Three', qty: 7, price: 300 },
    // { id: 4, productId: 4,  productName: 'Test Four', qty: 12, price: 400 },

  ];

  cartTotal = 0;
  

  constructor(private messengerSerivce: MessengerService) { }

  ngOnInit() {

    this.messengerSerivce.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {

    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        productId: product.price,
      })
    }
    // if (this.cartItems.length === 0) {
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty: 1,
    //     productId: product.price,
    //   })
    // } else {
    //   for (let i in this.cartItems) {
    //     if (this.cartItems[i].id === product.id) {
    //       this.cartItems[i].qty++;
    //     }
  
    //     else {
    //       this.messengerSerivce.getMsg().subscribe() => {
    //         this.addProductToCart(product);
       
    //       })
    //     }
  
    //     this.cartTotal = 0;
    //     this.cartItems.forEach(item => {
    //       this.cartTotal += (item.qty * item.price)
    //     })
    //   }
    // }
  }

}
