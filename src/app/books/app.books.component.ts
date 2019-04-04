import { Component, OnInit, OnChanges } from '@angular/core';
import { BooksService } from '../services/app.book.service';
import { Book } from './app.book.model';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-books-root',
  templateUrl: './app.books.root.component.html',
  styleUrls: ['./app.books.scss']
})
export class BooksRootComponent implements OnInit{

    name: string = "Book Component test";
    myBooks: Book[] = [];
    newBookMessage: string = "Add a new book";
    showAddCard: boolean = false;
    newBook: Book = new Book(0,null,0);
    bookAddError: boolean = false;
    showEditCard: boolean = false;
    bookShowCard: boolean = false;
    bookTobeEdited: Book = new Book(0,null,0); 
    bookEditError: boolean = false;
    searchValue: string = null;
    view: string = 'grid';

    constructor(private bookService : BooksService ,
        private router : Router) {

    }

    ngOnInit() {
        this.bookService.getBooks().subscribe((booksFromDB: Book[]) => {
            this.myBooks = booksFromDB;
        })
    }


    enableOrDisableCard() {
        this.showAddCard = !this.showAddCard;
    }

    enableOrDisableEditCard() {
        this.showEditCard = !this.showEditCard;
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
    

    editABook(book: Book) { 
        //this.bookTobeEdited = book;
        //this.bookTobeEdited = new Book(book.id,book.name,book.price);
        Object.assign(this.bookTobeEdited , book);
        //console.log(this.bookTobeEdited);
        this.showEditCard = true;
    }

    saveABook() { 
        this.bookService.updateBook(this.bookTobeEdited).subscribe((bookEdited: Book) => {
            let updatedBooks: Book[] = [];
            this.myBooks.forEach((book: Book) => {
                if(book.id === bookEdited.id) {
                    updatedBooks.push(bookEdited);
                } else {
                    updatedBooks.push(book);
                }
            })

            this.myBooks = updatedBooks;
            this.showEditCard = false;
        },
        error => {
            console.log("Error");
            this.bookEditError = true;
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

    toggleGridOrCardView(view : string) {
        console.log(view);
        this.view = view;
    }

    navigateToSprinBoot() {
        this.router.navigate(["/springBootService"]);
    }
}
