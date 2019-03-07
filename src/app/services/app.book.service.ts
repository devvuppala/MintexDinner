import { Observable } from "rxjs";
import { Book } from "../books/app.book.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const JSON_SERVICE = "http://localhost:3000";

@Injectable()
export class BooksService {

    constructor(private http: HttpClient) {

    }

    getBooks() : Observable<Book[]>{
        //return books from sercice
       return this.http.get<Book[]>(JSON_SERVICE + "/books");
    }
}