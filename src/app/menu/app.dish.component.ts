import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, SimpleChange } from "@angular/core";
import { Dish } from "./app.dish.model";

@Component({
    selector:'menu-dish',
    template:`  
            
        <a href="/menus/{{myDishHere.id}}"> {{myDishHere.name}}</a><br>
        {{myDishHere.price + priceDifference | currency : 'INR' : true}}
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
        <!-- Dish number : <ng-content></ng-content>
         Dish number alias name : {{index}}-->
        
        
    `
})

export class MenuDishComponent implements OnChanges {
    
    @Input() myDishHere : Dish;
    //@Input('myIndex') index: number;
    @Input() priceDifference: number;

    private _index: number;

    @Input()
    set index(inputIndex: number) {
        this._index = inputIndex + 5;
    }

    get index() {
        return this._index;
    }

    @Output() addedToCart: EventEmitter<any> = new EventEmitter<any>();

    addThisToCart(quantity) {
        this.addedToCart.emit({dish : this.myDishHere, quantity: parseInt(quantity), date: new Date()});
    }

    ngOnChanges(change: {[propKey: string]: SimpleChange}) {
        console.log("ng on changes");
    }

    changeName() {
        this.myDishHere.name = this.myDishHere.name + ' modified';
    }

}