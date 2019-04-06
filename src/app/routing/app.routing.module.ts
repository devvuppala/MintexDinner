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
import { MenuSmartComponent } from '../menu/app.menu.smart.component';
import { SingleDishComponent } from '../menu/app.single.dish.component';
import { LoginGuard } from './app.login.guard.service';
import { CommonModule } from '@angular/common';
import { Canloadguard } from './app.can.load.guard.service';
const appRoutes : Routes = [
    {path:'', component: LoginComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: SignUpComponent , canActivate: [LoginGuard]},
    {path:'books' , loadChildren: '../books/app.books.module#BooksModule' , canLoad: [Canloadguard]},
    {path:'springBootService', component: SpringBootTestComponent , canActivate: [LoginGuard]},
    {path:'logout', component: LogoutComponent , canActivate: [LoginGuard]},
    // {path:'menus', component: MenuSmartComponent,
    //   children: [
    //     {path:'' , component: MenuSmartComponent},
    //     {path:':id', component: SingleDishComponent}
    //   ]
  
    // },
    {path:'menus', component: MenuSmartComponent , canActivate: [LoginGuard]},
    {path:'menus/:id', component: SingleDishComponent , data: {title: 'test-data-sent-here'} , canActivate: [LoginGuard]},
    {path:'**', component: PageNotFound , canActivate: [LoginGuard]}
]

@NgModule({
  declarations: [
    NavigationComponent, PageNotFound
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MyCustomPipesSharedModule,
    MyCustomDirectivesSharedModule,
    RouterModule.forRoot(appRoutes) //,{useHash: true}
  ],
  providers: [LoginGuard, Canloadguard],
  exports:[NavigationComponent]
})


export class AppRoutingModule { }
