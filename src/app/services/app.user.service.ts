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

    getAllUsers() : Observable<User[]> {
       return this.http.get<User[]>(JSON_SERVICE + "/users");
    }

    getUserByEmailID(emailID: string) : Observable<User[]> | null  {
        return this.http.get<User[]>(JSON_SERVICE + "/users?emailID_like="+emailID)
    }

    validateUserForlogin(user: User): Observable<User[]> {
        let parameter = "emailID=" + user.emailID + "&password=" + user.password
        let returnedUser: User[] = [];
        return this.http.get<User[]>(JSON_SERVICE + "/users?" + parameter);
    }

}