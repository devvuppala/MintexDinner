import { Directive, HostBinding, OnInit, OnDestroy, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
   selector:'[validateInput]' 
})

export class ValidateInputDirective implements OnInit, OnDestroy {

    @HostBinding('style.border') myBorder;
    @HostBinding('style.color') myInputColor;

    constructor(private elementRef: ElementRef, 
        private renderer: Renderer2) {
            
        }

    @HostListener("input") onInput(event:KeyboardEvent) {
        console.log(this.elementRef);
        let valueThatIsEnteredInTheInputBox = this.elementRef.nativeElement.value;
            console.log(valueThatIsEnteredInTheInputBox);
            if(valueThatIsEnteredInTheInputBox > 10) {
                this.myBorder = '5px solid red';
                this.myInputColor = 'orange';
            } else if (valueThatIsEnteredInTheInputBox < 10) {
                this.myBorder = '5px solid green';                
                this.myInputColor = 'cyan';
            } else {
                this.myBorder = '5px solid blue';                
                this.myInputColor = 'black';
            }
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
      }
      
      @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
      }
      
      private highlight(color: string) {
        this.elementRef.nativeElement.style.backgroundColor = color;
      }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

}