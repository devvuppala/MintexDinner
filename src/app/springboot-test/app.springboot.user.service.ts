import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class SpringBootUserService {


    mySpringBootService = 'http://localhost:8080/user';
    shreySpringBootService = 'http://192.168.2.236:8080/user/allusers'
    constructor(private http: HttpClient) {

    }

    // sayHello() : Observable<any> {
    //     return this.http.get<any>(this.mySpringBootService + "/hello");
    // }

    getData() : Observable<Test[]> {
        let data =  this.http.get<Test[]>(this.shreySpringBootService);
        console.log(data);
        return data;
    }

}

export class Test {
    id: string;
    username: string;
    password: string; 
}