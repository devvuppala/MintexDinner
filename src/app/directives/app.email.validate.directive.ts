import { Directive, Input } from "@angular/core";
import { Validator, FormControl, AbstractControl, NG_VALIDATORS, ValidationErrors } from "@angular/forms";

@Directive({
    selector:'[emailValidator]',
    providers: [{provide: NG_VALIDATORS, 
        useExisting: MyCustomEmailValidator, 
        multi: true}]
})

export class MyCustomEmailValidator implements Validator {

    

    validate(input: AbstractControl ) : ValidationErrors {
        console.log(input.value);
        if(input.value != null && input.value.length >= 5) {
            if(input.value.toLowerCase().includes('mintex.com')) {
                return {'mintexEmailValidator': false}
            } else {
                return {'mintexEmailValidator': true}
            }
        }
        return null;
    }

}