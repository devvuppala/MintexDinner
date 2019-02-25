import { Component } from "@angular/core";
import { Dish } from "./app.dish.model";
import { MenuDishComponent } from "./app.dish.component";
import { menuService } from "./app.menu.service";

@Component({
    selector:'menu-smart-comp',
    templateUrl:'./app.menu.smart.template.html',
    styleUrls:['app.menu.styles.css']
})

export class MenuSmartComponent {

    constructor(private menuService : menuService) {

    }
    name: string = "Mintex Dinner Smart Component Updated";
    version: number = 10.00;
    mintexDish: Dish = {
       id: 1,
       name:'Panner' ,
       price: 9.99
    }

    menu: Dish[] = this.menuService.getDishes();

    inputValue: number = 5000;
    increaseByValue: number = 5;

    accelrate() {
        this.inputValue = this.inputValue + this.increaseByValue;
    }
}