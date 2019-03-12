import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/app.book.service';
import { Book } from './app.book.model';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-books-root',
  templateUrl: './app.books.root.component.html',
  styleUrls: ['./app.books.css']
})
export class BooksRootComponent implements OnInit {

    name: string = "Book Component test";
    myBooks: Book[] = [];
    newBookMessage: string = "Add a new book";
    showAddCard: boolean = false;
    newBook: Book = new Book(0,null,0);
    bookAddError: boolean = false;

    constructor(private bookService : BooksService) {

    }

    ngOnInit() {
        this.bookService.getBooks().subscribe((booksFromDB: Book[]) => {
            this.myBooks = booksFromDB;
        })
    }

    enableOrDisableCard() {
        this.showAddCard = !this.showAddCard;
    }

    addABook(book) { 
        this.newBook.id = book.bookID;
        this.newBook.name = book.bookName;
        this.newBook.price = book.bookPrice;
        this.bookService.addNewBook(this.newBook).subscribe((addedBook: Book) => {
            console.log(addedBook);
            this.myBooks.push(addedBook);
            this.showAddCard = false;
            this.bookAddError = false;
        },
        error => {
            console.log("Error");
            this.bookAddError = true;
        })

    }

    deleteBook(bookToBeDeleted : Book) {
        this.bookService.deleteBook(bookToBeDeleted).subscribe((returnData: any) =>{
            console.log(returnData);
            this.bookService.getBooks().subscribe((booksFromDB: Book[]) => {
                this.myBooks = booksFromDB;
            })
        })
    }
}
