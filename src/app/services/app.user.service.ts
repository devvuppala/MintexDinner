import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../login/login.user.model";

const JSON_SERVICE = "http://localhost:3000"
@Injectable()
export class UserService {

    constructor(private http : HttpClient) {

    }

    validateUser(user: User): User[] {
        let parameter = "emailID=" + user.emailID + "&password=" + user.password
        let returnedUser: User[] = [];
        this.http.get<User[]>(JSON_SERVICE + "/users?" + parameter)
        .subscribe((retuned: User[]) => {
            returnedUser = retuned;
        });
        return returnedUser; 
    }

}