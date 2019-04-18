import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Dish } from "./app.dish.model";
import { MenuDishComponent } from "./app.dish.component";
import { menuService } from "./app.menu.service";
import { SubscriptionLike, Observable, Observer } from "rxjs";

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

      
    //Observable will fire after 3 sec, after 5 sec and fails after 7 and complete after 9 second
 
    const observableTest = Observable.create((observer: Observer<string>) => {      

        setTimeout(() => {
          observer.next('Data Package : 1') // Pushes the next data packet
        }, 5000); // 5th second
        
        setTimeout(() => {
          observer.next('Data Package : 2') // Pushes the next data packet
        }, 3000); // 3rd second
        
        setTimeout(() => {
          //observer.error('Data Package ERROR') // Pushes the next data packet
        }, 7000); // 7th second
        
        setTimeout(() => {
        //observer.complete(); // Complete the observable
          console.log('9000');
        }, 9000);// 9th second

        setInterval(() => {
            observer.next("Data packet")
        }, 1000)
        
        setTimeout(() => {
          observer.next('Data Package : 4') // Pushes the next data packet, Thill will be never invoked as we are completing the observable at 9th second
        }, 11000);// 11thth second
      });

      //write observable handler by subsribing to it
       this.customObservableSubscription = observableTest.subscribe(
        (data: string) => { console.log("Data : " +data); } , // Return Data
        (error: string) => { console.log("ERROR : " + error); } , // Error
        () => { console.log('Completed'); } // Completed , this will be invoked once completed , but will not retrun anything here
      ) 
        
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

    

  customObservableSubscription : SubscriptionLike;
  ngOnDestroy() {
    this.customObservableSubscription.unsubscribe();
  }
}