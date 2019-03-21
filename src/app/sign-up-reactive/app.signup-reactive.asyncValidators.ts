import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { UserService } from "../services/app.user.service";
import { User } from "../login/login.user.model";
import { map } from "rxjs/operators";

@Injectable()
export class SignUpAsyncValidators {
    checkIfUserAvailable(userService: UserService) {
        return (input: FormControl)  : Observable<ValidationErrors | null> => {
            return userService.getUserByEmailID(input.value).pipe( 
                map((users : User[]) =>  {
                    console.log("Available" + users)
                     return users.length > 0 ? {'emailNotAvailable' : true} : null;
                })
            )
        }
        
    }
}