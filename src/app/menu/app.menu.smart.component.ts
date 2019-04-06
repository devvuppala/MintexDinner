import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Dish } from "./app.dish.model";
import { MenuDishComponent } from "./app.dish.component";
import { menuService } from "./app.menu.service";

@Component({
    selector:'menu-smart-comp',
    templateUrl:'./app.menu.smart.template.html',
    styleUrls:['app.menu.styles.css']
})

export class MenuSmartComponent{

    constructor(private menuService : menuService) {
        setTimeout(() => {
            this.menu.push(this.mintexDish);
        }, 9000)
    }
    name: string = "Mintex Dinner Smart Component Updated";
    version: number = 10.00;
    mintexDish: Dish = {
       id: 5,
       name:'Pushed Dish' ,
       price: 99.99
    }

    showPriceInput: boolean = true;

    menu: Dish[] = [];
    cartCount: number = 0;
    priceDifference: number = 0;

    ngOnInit() {
        this.menuService.getDishes().subscribe((dishes: Dish[]) => {
            this.menu = dishes;
        });
      console.log('ngOnInint')  ;
        
    }

    // ngOnChanges( change: SimpleChanges) {
    //     console.log("ng on changes");
    //     console.log(change['menu'])
    // }

    // ngDoCheck() {
    //     console.log('do check');
    // }

    // ngAfterContentInit() {
    //     console.log('ngAfterContentInit');
    // }

    // ngAfterContentChecked() {
    //     console.log('ngAfterContentChecked');
    // }

    // ngAfterViewInit() {
    //     console.log('ngAfterViewInit'); 
    // }

    // ngAfterViewChecked() {
    //     console.log('ngAfterViewChecked'); 
    // }

    // ngOnDestroy(){
    //     console.log('Bye! Menu Smart conponent destroyed');
    // }

    
    

    inputValue: number = 5000;
    increaseByValue: number = 5;

    accelrate() {
        this.inputValue = this.inputValue + this.increaseByValue;
    }

    handleTheEmit(dataEmitted: any) {
        console.log(dataEmitted.date);
        this.cartCount = this.cartCount + <number>dataEmitted.quantity;
    }

    increasePrice() {
        this.priceDifference = this.priceDifference + 1;
    }

    decreasePrice() {
        this.priceDifference = this.priceDifference - 1;
    }
}