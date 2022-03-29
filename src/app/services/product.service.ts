import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product One', 'This is product one description', 100),
    new Product(2, 'Product Two', 'This is product Two description', 200),
    new Product(3, 'Product Three', 'This is product Three description', 300),
    new Product(4, 'Product Four', 'This is product Four description', 400),
    new Product(5, 'Product Five', 'This is product Five description', 500),
    new Product(6, 'Product Six', 'This is product Six description', 600)
  ];

  constructor() { }


  getProducts(): Product[] {
    return this.products;
  }
}
