
import { NgModule } from '@angular/core';
import { BooksRootComponent } from './app.books.component';
import { BooksService } from '../services/app.book.service';
import { CurrencyConvertorPipe } from '../pipes/app.usdToINR.pipe';
import { FormsModule } from '@angular/forms';
import { MyCustomPipesSharedModule } from '../pipes/app.pipe.module';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const menuRoutes : Routes = [
  {path:'' , component:BooksRootComponent}
]
@NgModule({
  declarations: [
    BooksRootComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MyCustomPipesSharedModule,
    RouterModule.forChild(menuRoutes)
  ],
  providers: [BooksService],
  exports: [BooksRootComponent]
})
export class BooksModule { }
