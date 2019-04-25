import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[];
  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.displayProducts();
  }

  displayProducts(){
    this.productservice.getProducts().subscribe((productsFromService: Product[]) => {
      this.products = productsFromService;
    })
  }


}
