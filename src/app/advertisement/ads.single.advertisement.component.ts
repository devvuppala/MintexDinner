import { Component, Input } from "@angular/core";
import { Advertisement } from "./ads.model";

@Component({
    selector:'ads-single-comp',
    template:`
   {{advertisement.name}} : {{advertisement.price}}<br>
   <img src="{{advertisement.image}}">   
    `
})

export class SingleAdvertisementComponent {

    @Input() advertisement: Advertisement;

}