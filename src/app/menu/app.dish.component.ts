import { Component, Input } from "@angular/core";
import { Dish } from "./app.dish.model";

@Component({
    selector:'menu-dish',
    template:`
        <td>{{myDishHere.name}}</td>
        <td>
            <i *ngIf="myDishHere.price > 10">
                <b style="color:red;">{{myDishHere.price}}</b>
            </i>
            <i *ngIf="myDishHere.price < 10">
                <b style="color:green;">{{myDishHere.price}}</b>
            </i>
        </td>
    
    `
})

export class MenuDishComponent {
    
    @Input() myDishHere : Dish;

}