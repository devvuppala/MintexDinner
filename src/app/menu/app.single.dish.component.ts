import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, SimpleChange, OnInit } from "@angular/core";
import { Dish } from "./app.dish.model";
import { ActivatedRoute } from "@angular/router";
import { menuService } from "./app.menu.service";

@Component({
    selector:'menu-single-dish',
    template:`  
       
        {{dishFromRouterPath?.name}} <br>
        {{dishFromRouterPath?.price}}
        
        
    `
})

export class SingleDishComponent implements OnInit{

    dishFromRouterPath: Dish;

    constructor(private activatedRouterService : ActivatedRoute,
                private menuService : menuService) {

    }

    ngOnInit() {
        console.log(this.activatedRouterService.paramMap);
        console.log(this.activatedRouterService.snapshot.queryParamMap.get('price'));
        console.log(this.activatedRouterService.snapshot.paramMap);
        console.log(this.activatedRouterService.snapshot.data)
        let menuID = this.activatedRouterService.snapshot.paramMap.get('id');
        if(menuID != null) {
            let menuIDNum: number = +menuID;
            let dishes: Dish[] = [];
            this.menuService.getDishes().subscribe((dishes: Dish[]) => {
                // this.dishFromRouterPath = dishes.filter((dish) => {
                //     return dish.id = menuIDNum;
                // })
    
                dishes.forEach((dish: Dish) => {
                    if(dish.id === menuIDNum) {
                        this.dishFromRouterPath = dish;
                    }
                    
                })
            })
        } else {
            let queryMap = this.activatedRouterService.snapshot.queryParams;
            console.log(queryMap);
        }
        
    }


    

}