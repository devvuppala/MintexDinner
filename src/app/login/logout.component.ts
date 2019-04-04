import { Component, OnInit } from "@angular/core";
import { User } from "./login.user.model";
import { UserService } from "../services/app.user.service";
import { ComponentFactoryResolver } from "@angular/core/src/render3";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl:'app.login.html',
    styleUrls:['app.login.css']
})

export class LogoutComponent implements OnInit {
  
    constructor(private routerService : Router) {

    }
    ngOnInit() {
        sessionStorage.setItem("userName",null);
        sessionStorage.setItem("loggedIn","false");
        this.routerService.navigate([""]);
    }

}