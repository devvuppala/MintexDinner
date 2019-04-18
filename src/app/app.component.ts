import { Component, OnInit, OnChanges, AfterViewChecked, AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core';
import { SubscriptionLike, Observable, Observer } from 'rxjs';
import { LanguageService } from './services/app.language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mintex-dinner';

  now: Date = new Date();
  loggedIn: boolean = false;
  whoLoggedIn: string;

  constructor(private appLanguageService : LanguageService) {

  }

  checkIfLoggedIn() {
    let loggedInValidation = sessionStorage.getItem("loggedIn");
    if (loggedInValidation === "true") {
      return true;
    } else {
      return false;
    }
  }

  getvalue() {
    return localStorage.getItem("localTest");
  }

  handleLanguageChange(language: string) {
    this.appLanguageService.language.next(language);
  }





    

 

  
}
