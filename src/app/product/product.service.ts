import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  productService = 'http://localhost:3000/products'

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.productService)
  }

  getProductsSyncData() : Product[]{
    let  myMockData = [
      {
        id: 1,
        name: 'laptop',
        price: 5999.99
      },
      {
        id: 2,
        name: 'iphone',
        price: 15000.99
      },
      {
        id: 3,
        name: 'desktop',
        price: 99999.99
      }
    ]
    return myMockData;
  }

}
