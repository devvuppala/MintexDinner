import { Component, OnInit, OnChanges, AfterViewChecked, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mintex-dinner';

  now : Date = new Date();
  loggedIn: boolean = false;
  whoLoggedIn: string;


  checkIfLoggedIn() {
    let loggedInValidation = sessionStorage.getItem("loggedIn");
    if(loggedInValidation === "true") {
      return true;
    } else {
      return false;
    }
  }

  getvalue() {
    return localStorage.getItem("localTest");
  }

 

  
}
