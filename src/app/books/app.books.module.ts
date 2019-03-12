import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BooksRootComponent } from './app.books.component';
import { BooksService } from '../services/app.book.service';
import { CurrencyConvertorPipe } from '../pipes/app.usdToINR.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BooksRootComponent, CurrencyConvertorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BooksService],
  exports: [BooksRootComponent]
})
export class BooksModule { }
