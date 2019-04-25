import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from './product.model';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      providers: [ProductService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the products Sync data here', () => {
    let productService = fixture.debugElement.injector.get(ProductService);
    let returnedProducts = productService.getProductsSyncData();
    component.products = returnedProducts;
    expect(component.products.length).toEqual(3);
  });

  it('should get the products Sync data here', () => {
    let productService = fixture.debugElement.injector.get(ProductService);
    let returnedProducts ;
    spyOn(productService,"getProducts");
    //fixture.detectChanges();
    fixture.whenStable().then(() => {
      component.products = returnedProducts;
      expect(component.products.length).toEqual(3);
    })
    
  });

  it('h3 tag should have the product length', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toEqual('Count Of Products : ')
  });
});
