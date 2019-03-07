import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/app.book.service';
import { Book } from './app.book.model';

@Component({
  selector: 'app-books-root',
  templateUrl: './app.books.root.component.html',
  styleUrls: ['./app.books.css']
})
export class BooksRootComponent implements OnInit {

    name: string = "Book Component test";
    myBooks: Book[] = [];

    constructor(private bookService : BooksService) {

    }

    ngOnInit() {
        this.bookService.getBooks().subscribe((booksFromDB: Book[]) => {
            this.myBooks = booksFromDB;
        })
    }
}
