import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BooksRootComponent } from './app.books.component';
import { BooksService } from '../services/app.book.service';
import { CurrencyConvertorPipe } from '../pipes/app.usdToINR.pipe';
import { FormsModule } from '@angular/forms';
import { MyCustomPipesSharedModule } from '../pipes/app.pipe.module';

@NgModule({
  declarations: [
    BooksRootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyCustomPipesSharedModule
  ],
  providers: [BooksService],
  exports: [BooksRootComponent]
})
export class BooksModule { }
