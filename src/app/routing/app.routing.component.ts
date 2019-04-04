import { Component } from "@angular/core";

@Component({
    selector:'app-navigation',
    templateUrl:'app.navigation.html',
    styleUrls:['app.navigation.scss']
})

export class NavigationComponent {

    getWhoLoggedIn() {
        let whoLoggedIn = sessionStorage.getItem("userName");
        if(whoLoggedIn != null) {
         return whoLoggedIn
       } else {
         return null;
       }
     }

}