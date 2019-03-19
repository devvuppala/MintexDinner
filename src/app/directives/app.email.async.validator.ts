import { Directive } from "@angular/core";
import { NG_VALIDATORS, NG_ASYNC_VALIDATORS, AsyncValidator, FormControl, ValidationErrors, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserService } from "../services/app.user.service";

@Directive({
    selector: '[uniqueEmailValidator]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: EmailAsynchronousValidator,
        multi : true
    }]
})

export class EmailAsynchronousValidator implements AsyncValidator {

    constructor(private userService : UserService) {

    }

    validate(control: AbstractControl) : Observable<ValidationErrors | null> | Promise<ValidationErrors | null> {
        console.log("UniqueEmailAsyncValidation : " + control.value)
        return this.userService.getUserByEmailID(control.value).pipe( 
            map(user =>  {
                console.log("Available" + user)
                 return user != null ? {'emailNotAvailable' : true} : {'emailNotAvailable' : false};
            })
        )
    }
}