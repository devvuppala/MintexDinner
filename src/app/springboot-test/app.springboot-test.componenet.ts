import { Component, OnInit } from "@angular/core";
import { SpringBootUserService, Test } from "./app.springboot.user.service";

@Component({
    selector:'spring-boot-test',
    template: `
        Message from service : {{message}}
        <div *ngIf="errorMessage != ''">
            <div class = "alert alert-danger">
                {{errorMessage}}
            </div>
        </div>
        <ng-container *ngIf="errorMessage == ''">
        <div *ngFor="let user of dataFromShreyService">
            <div class="card">
            <div class="card-header">
                {{user.username}}
            </div>
            <div class="card-body">            
                {{user.id}}
                {{user.username}}
                {{user.password}}
            </div>
            </div>
        </div>
        </ng-container>
    `
})
export class SpringBootTestComponent implements OnInit{
    message: string;
    dataFromShreyService: any[];
    errorMessage: string = '';

    constructor(private springBootService : SpringBootUserService) {
        // this.springBootService.sayHello().subscribe((message: any) => {
        //     console.log(message);
        //     this.message = message.name;
        // })
    }
    
    ngOnInit() {
       this.springBootService.getData().subscribe(
           (data: Test[]) => {
                console.log(data);
                this.dataFromShreyService = data;
            },
            (error) => {
                console.log("error");
                this.errorMessage = "Error from the service";
            }
        )
    }
}