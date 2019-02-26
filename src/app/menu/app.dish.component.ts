import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Dish } from "./app.dish.model";

@Component({
    selector:'menu-dish',
    template:`  
        <ng-content></ng-content>    
        {{myDishHere.name}}
        {{myDishHere.price}}
        Quant = {{myDishHere.quantity}}
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Quantity</label>
        </div>
        <select #myQuantityTemRef>
            <option value=1 selected>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
        </select>
        <button class="btn btn-success" 
            (click)="addThisToCart(myQuantityTemRef.value)">Add To Cart</button>
        </div>
        
        
    `
})

export class MenuDishComponent {
    
    @Input() myDishHere : Dish;

    @Output() addedToCart: EventEmitter<any> = new EventEmitter<any>();

    addThisToCart(quantity) {
        this.addedToCart.emit({dish : this.myDishHere, quantity: parseInt(quantity), date: new Date()});
    }

}