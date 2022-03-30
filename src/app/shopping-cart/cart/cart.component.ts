import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    { id: 1, productId: 1, productName: 'Test One', qty: 4, price: 100 },
    { id: 2, productId: 2,  productName: 'Test Two', qty: 8, price: 200 },
    { id: 3, productId: 3,  productName: 'Test Three', qty: 7, price: 300 },
    { id: 4, productId: 4,  productName: 'Test Four', qty: 12, price: 400 },
  ];

  cartTotal = 0;
  

  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    });
  }

}
