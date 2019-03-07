import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BooksRootComponent } from './app.books.component';
import { BooksService } from '../services/app.book.service';
import { CurrencyConvertorPipe } from '../pipes/app.usdToINR.pipe';

@NgModule({
  declarations: [
    BooksRootComponent, CurrencyConvertorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [BooksService],
  exports: [BooksRootComponent]
})
export class BooksModule { }
