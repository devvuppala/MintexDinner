import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyCustomFilterPipe } from './app.filter.pipe';
import { CurrencyConvertorPipe } from './app.usdToINR.pipe';

@NgModule({
  declarations: [
    MyCustomFilterPipe, CurrencyConvertorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [MyCustomFilterPipe, CurrencyConvertorPipe]
})
export class MyCustomPipesSharedModule { }
