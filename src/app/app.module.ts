import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { AdsModule } from './advertisement/ads.module';
import { BooksModule } from './books/app.books.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { CurrencyConvertorPipe } from './pipes/app.usdToINR.pipe';
import { LoginModule } from './login/login.module';
import { FormsModule } from '@angular/forms';
import { MyCustomPipesSharedModule } from './pipes/app.pipe.module';
import { SignUpModule } from './sign-up/app.signup.module';
import { MyCustomDirectivesSharedModule } from './directives/app.directives.module';
import { SignUpReactiveModule } from './sign-up-reactive/app.sign-up-reactive.module';
import { AppRoutingModule } from './routing/app.routing.module';

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
    LoginModule,
    FormsModule,
    MyCustomPipesSharedModule,
    SignUpModule,
    MyCustomDirectivesSharedModule,
    SignUpReactiveModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
