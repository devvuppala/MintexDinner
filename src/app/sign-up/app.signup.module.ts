import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyCustomPipesSharedModule } from '../pipes/app.pipe.module';
import { SignUpComponent } from './app.signup.component';
import { MyCustomDirectivesSharedModule } from '../directives/app.directives.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MyCustomPipesSharedModule,
    MyCustomDirectivesSharedModule
  ],
  providers: [],
  exports:[SignUpComponent]
})
export class SignUpModule { }
