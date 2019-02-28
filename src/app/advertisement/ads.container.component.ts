import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from "@angular/core";
import { AdsService } from "./ads.service";
import { Advertisement } from "./ads.model";
import { SingleAdvertisementComponent } from "./ads.single.advertisement.component";

@Component({
    selector:'ads-smart-comp',
    templateUrl:'./app.ads.smart.template.html'
})

export class AdsComponent{

    ads: Advertisement[] = [];   
    interval: any;

    constructor(private adsService: AdsService, 
        private componentFactoryResolver: ComponentFactoryResolver) {

    }

    //Initilizing a 'SingleAdvertisementComponent' using view child
    @ViewChild(SingleAdvertisementComponent) singleAddComponent: SingleAdvertisementComponent ;
    //Creating a reference of the conmtainer (template)
    @ViewChild('dynamicAdvertisement',{read:ViewContainerRef}) adComponentContainerReference : ViewContainerRef;
    

    ngOnInit() {
        this.ads = this.adsService.getAdds();
        this.getAds();
    }


    loadAdvertisement() {
        var randomNumber = Math.floor(Math.random() * this.ads.length );
        let currentAd:Advertisement = this.ads[randomNumber];
        //From angular's component factory , i am creating a factory that can create SingleAdvertisementComponent
        let adComponentFactory = this.componentFactoryResolver.resolveComponentFactory(SingleAdvertisementComponent);
        //Creating a component
        let singleAddComponent = this.adComponentContainerReference.createComponent(adComponentFactory);
        //get the component instance
        const singleAddComponentInstace = singleAddComponent.instance;
        //inject the random advertisement to the component
        singleAddComponentInstace.advertisement = currentAd;

        //<ads-single-comp [advertisement] = "currentAd" ></ads-single-comp>
       
    
    }

    getAds() {
        this.interval = setInterval(() => {
            //This clears the template
           this.adComponentContainerReference.clear();
            this.loadAdvertisement();
        }, 5000);
      }


    


}