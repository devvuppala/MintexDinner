import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyCustomFilterPipe } from './app.filter.pipe';
import { CurrencyConvertorPipe } from './app.usdToINR.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MyCustomFilterPipe, CurrencyConvertorPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [MyCustomFilterPipe, CurrencyConvertorPipe]
})
export class MyCustomPipesSharedModule { }
