import { Dish } from "./app.dish.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http"
import { Observable, ObservableLike } from "rxjs";

const dishesService = 'http://my-json-server.typicode.com/devvuppala/restuarentMintexServiceJSON/blob/master/dishes'
@Injectable()
export class menuService {

    constructor(private http : Http) {

    }

    getDishes() {
       return this.http.get(dishesService);
    }
}