import { Component, OnInit } from "@angular/core";
import { Dish } from "./app.dish.model";
import { MenuDishComponent } from "./app.dish.component";
import { menuService } from "./app.menu.service";

@Component({
    selector:'menu-smart-comp',
    templateUrl:'./app.menu.smart.template.html',
    styleUrls:['app.menu.styles.css']
})

export class MenuSmartComponent implements OnInit{

    constructor(private menuService : menuService) {
        console.log('constructor');
    }
    name: string = "Mintex Dinner Smart Component Updated";
    version: number = 10.00;
    mintexDish: Dish = {
       id: 1,
       name:'Panner' ,
       price: 9.99
    }

    menu: Dish[] = [];
    cartCount: number = 0;

    ngOnInit() {
        this.menuService.getDishes().subscribe((value) => {
            this.menu = value.json() as Dish[];
        });
        
    }
    

    inputValue: number = 5000;
    increaseByValue: number = 5;

    accelrate() {
        this.inputValue = this.inputValue + this.increaseByValue;
    }

    handleTheEmit(dataEmitted: any) {
        console.log(dataEmitted.date);
        this.cartCount = this.cartCount + <number>dataEmitted.quantity;
    }
}