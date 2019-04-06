import { CanActivate, Router, CanLoad } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class Canloadguard implements CanLoad {

    constructor(private routerService : Router) {

    }
    

    canLoad() {
        //If user logged In?
        let userloggedin: boolean = (sessionStorage.getItem("loggedIn") === "true");
        if(!userloggedin) {
            this.routerService.navigate(['/login']);
            return false;
        } 
        return userloggedin;        
    }
}