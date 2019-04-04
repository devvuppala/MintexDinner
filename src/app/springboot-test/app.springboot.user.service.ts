import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class SpringBootUserService {


    mySpringBootService = 'http://localhost:8080/user'
    constructor(private http: HttpClient) {

    }

    sayHello() : Observable<any> {
        return this.http.get<any>(this.mySpringBootService + "/hello");
    }

}