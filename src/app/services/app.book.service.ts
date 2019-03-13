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

    addNewBook(book : Book): Observable<Book> {
        return this.http.post<Book>(JSON_SERVICE + "/books", book);
    }

    deleteBook(book: Book) : Observable<any> {
        return this.http.delete<any>(JSON_SERVICE + "/books/"+ book.id);
    }

    updateBook(book: Book): Observable<Book> {
        return this.http.put<Book>(JSON_SERVICE + "/books/" + book.id,book);
    }
}