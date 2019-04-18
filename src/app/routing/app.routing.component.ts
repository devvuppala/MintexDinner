import { Component, OnInit } from "@angular/core";
import { LanguageService } from "../services/app.language.service";

@Component({
    selector:'app-navigation',
    templateUrl:'app.navigation.html',
    styleUrls:['app.navigation.scss']
})

export class NavigationComponent implements OnInit {

  language: string = 'eng';
  constructor(private appLanguageService : LanguageService) {

  }

    getWhoLoggedIn() {
        let whoLoggedIn = sessionStorage.getItem("userName");
        if(whoLoggedIn != null) {
         return whoLoggedIn
       } else {
         return null;
       }
     }


     ngOnInit() {
      this.appLanguageService.language.subscribe((languageSent: string) => {
        this.language = languageSent;
      })
     }


}