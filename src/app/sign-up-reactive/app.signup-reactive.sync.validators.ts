import { FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
export class SignUpReactiveFormSyncValidators {

    validateEmailID(input : FormControl) {
        //console.log(input.value);
        if(input.value != null && input.value.length >= 5) {
            if(input.value.toLowerCase().endsWith('mintex.com')) {
                return null;
            } else {
                return {'mintexEmailValidatorFailed': true}
            }
        }
        return null;
    }
}