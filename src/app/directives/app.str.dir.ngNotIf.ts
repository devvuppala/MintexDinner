import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
    selector:'[ngNotIf]'
})

export class NgNotIfDirective {

    constructor(private tempRef: TemplateRef<any> , private containerRef : ViewContainerRef) {

    }

    @Input() 
    set ngNotIf(value : boolean) {
        if(value == true) {
            this.containerRef.clear();
        } else {
            this.containerRef.createEmbeddedView(this.tempRef);
        }
    }
}