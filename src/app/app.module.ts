import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { AdsModule } from './advertisement/ads.module';
import { BooksModule } from './books/app.books.module';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyConvertorPipe } from './pipes/app.usdToINR.pipe';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    AdsModule,
    BooksModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
