import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCustomPipesSharedModule } from '../pipes/app.pipe.module';
import { MyCustomDirectivesSharedModule } from '../directives/app.directives.module';
import { SignUpReactiveComponent } from './app.signup-reactive.component';
import { SignUpReactiveFormSyncValidators } from './app.signup-reactive.sync.validators';
import { SignUpAsyncValidators } from './app.signup-reactive.asyncValidators';
import { UserService } from '../services/app.user.service';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    SignUpReactiveComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MyCustomPipesSharedModule,
    MyCustomDirectivesSharedModule
  ],
  providers: [SignUpReactiveFormSyncValidators, SignUpAsyncValidators, UserService],
  exports:[SignUpReactiveComponent]
})
export class SignUpReactiveModule { }
