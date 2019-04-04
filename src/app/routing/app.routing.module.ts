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
import { SpringBootTestComponent } from '../springboot-test/app.springboot-test.componenet';
import { LogoutComponent } from '../login/logout.component';
import { PageNotFound } from './app.pagenotfound.component';
const appRoutes : Routes = [
    {path:'', component: LoginComponent},
    {path:'register', component: SignUpComponent},
    {path:'books', component: BooksRootComponent},
    {path:'springBootService', component: SpringBootTestComponent},
    {path:'logout', component: LogoutComponent},
    {path:'**', component: PageNotFound}
]

@NgModule({
  declarations: [
    NavigationComponent, PageNotFound
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
