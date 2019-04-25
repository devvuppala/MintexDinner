import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductPricePipe } from './product-price.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, ProductPricePipe]
})
export class ProductModule { }
