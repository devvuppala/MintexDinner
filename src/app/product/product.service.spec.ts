import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from './product.model';
import { of } from 'rxjs';

describe('ProductService', () => {
  let productService: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService],
      imports: [HttpClientModule]
  })
  productService = TestBed.get(ProductService);
  });
 
  it('should be created', () => {    
    expect(productService).toBeTruthy();
  });

  it("should return products", () => {
    const myMockData = [
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

    let dataFromService;

    spyOn(productService, "getProducts").and.returnValue(of(myMockData));

    productService.getProducts().subscribe((products: Product[]) => {
      dataFromService = products;
    })

    expect(dataFromService).toEqual(myMockData);
  })

  it("Products length should match", () => {
    const myMockData = [
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

    let dataFromService;

    spyOn(productService, "getProducts").and.returnValue(of(myMockData));

    productService.getProducts().subscribe((products: Product[]) => {
      dataFromService = products;
    })

    expect(dataFromService.length).toEqual(3);
  })
});
