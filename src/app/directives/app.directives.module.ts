import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateInputDirective } from './app.attr.dir.inputColor';
import { NgNotIfDirective } from './app.str.dir.ngNotIf';
import { MyCustomEmailValidator } from './app.email.validate.directive';
import { EmailAsynchronousValidator } from './app.email.async.validator';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ValidateInputDirective, NgNotIfDirective, MyCustomEmailValidator, EmailAsynchronousValidator
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [ValidateInputDirective , NgNotIfDirective, MyCustomEmailValidator, EmailAsynchronousValidator]
})
export class MyCustomDirectivesSharedModule { }
