import { Dish } from "./app.dish.model";
import { Injectable } from "@angular/core";

@Injectable()
export class menuService {

    getDishes() : Dish[] {
        return [{
            id: 1,
            name:'Panner Butter Masala' ,
            price: 9.99
        },
        {
            id: 2,
            name:'Biryani' ,
            price: 9.99
        },
        {
            id: 3,
            name:'Chicken' ,
            price: 19.99
        }]
    }
}