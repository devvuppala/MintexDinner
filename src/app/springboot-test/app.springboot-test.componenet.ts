import { Component, OnInit } from "@angular/core";
import { SpringBootUserService } from "./app.springboot.user.service";

@Component({
    selector:'spring-boot-test',
    template: `
        Message from service : {{message}}
    `
})
export class SpringBootTestComponent implements OnInit{
    message: string;

    constructor(private springBootService : SpringBootUserService) {
        this.springBootService.sayHello().subscribe((message: any) => {
            console.log(message);
            this.message = message.name;
        })
    }
    
    ngOnInit() {
       
    }
}