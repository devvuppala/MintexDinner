import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ValidateInputDirective } from './app.attr.dir.inputColor';
import { NgNotIfDirective } from './app.str.dir.ngNotIf';
import { MyCustomEmailValidator } from './app.email.validate.directive';

@NgModule({
  declarations: [
    ValidateInputDirective, NgNotIfDirective, MyCustomEmailValidator
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [ValidateInputDirective , NgNotIfDirective, MyCustomEmailValidator]
})
export class MyCustomDirectivesSharedModule { }
