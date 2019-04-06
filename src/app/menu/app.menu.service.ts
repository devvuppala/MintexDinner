import { Dish } from "./app.dish.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, ObservableLike } from "rxjs";

const dishesService = 'https://my-json-server.typicode.com/devvuppala/restuarentMintexServiceJSON/blob/master/dishes'
@Injectable()
export class menuService {

    constructor(private http : HttpClient) {

    }

    getDishes() : Observable<Dish[]> {
       return this.http.get<Dish[]>(dishesService);
    }
}