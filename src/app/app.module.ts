import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { AdsModule } from './advertisement/ads.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    AdsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
