import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { MyCustomPipesSharedModule } from '../pipes/app.pipe.module';
import { MyCustomDirectivesSharedModule } from '../directives/app.directives.module';
import { NavigationComponent } from './app.routing.component';
import { LoginComponent } from '../login/login.component';
import { BooksRootComponent } from '../books/app.books.component';
import { SignUpComponent } from '../sign-up/app.signup.component';
const appRoutes : Routes = [
    {path:'', component: LoginComponent},
    {path:'register', component: SignUpComponent},
    {path:'books', component: BooksRootComponent}
]

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MyCustomPipesSharedModule,
    MyCustomDirectivesSharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  exports:[NavigationComponent]
})


export class AppRoutingModule { }
