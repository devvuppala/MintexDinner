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

export class LoginComponent implements OnInit {
    loginHeaderText = "Login";
    loginMessage: string = null;
    loginSucess: boolean = false;
    usersFromDB: User[] = [];
    searchEmailIDValue: string = null;
    user: User = {
        id: 0,
        name: null,
        emailID: null,
        password: null,
    };

    constructor(private userService : UserService,
        private routingService : ActivatedRoute,
        private routerService : Router) {

    }

    loginUser() {
        // this.userService.validateUser(this.user).subscribe((returnedUser: User[]) =>{
        //     if(returnedUser != null && returnedUser.length != 0) {
        //         this.loginMessage = "Logged in succesfully!"
        //         this.user = returnedUser[0];
        //         this.loginSucess = true;
        //     } else {
        //         this.loginMessage = "Login Failed";
        //         this.loginSucess = false;
        //     }
        // })
        let returneUser = this.userService.validateUser(this.user);
        console.log(returneUser)
    }

    ngOnInit() {
        this.getUsers()
    }
    getUsers() {
        this.userService.getAllUsers().subscribe((users: User[]) => {
            console.log(users)
            this.usersFromDB = users;
        })
    }

    navigateToRegisterPage() {
       this.routerService.navigate(["/register"]) ;
    }
}