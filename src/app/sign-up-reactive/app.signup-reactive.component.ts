import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SignUpReactiveFormSyncValidators } from './app.signup-reactive.sync.validators';
import { SignUpAsyncValidators } from './app.signup-reactive.asyncValidators';
import { UserService } from '../services/app.user.service';

@Component({
  selector: 'app-sign-up-reactive',
  templateUrl: './app.signup-reactive.html',
  styles:[ `
    .validationErrorMessage {
        color: red;
        font-style: italic;
    }
    .validationsuccessMessage {
        color: green;
        font-style: italic;
    }

    .ng-valid  {
        border-right: 5px solid #42A948; /* green */
      }
      
      .ng-invalid:not(form)  {
        border-right: 5px solid #a94442; /* red */
      }

      .input-group-text {
          width: 100px;
          background-color: blue;
          color: white;
      }
  `]
})

export class SignUpReactiveComponent {

    constructor(private signUpReactiveFormSyncValidators: SignUpReactiveFormSyncValidators,
            private signUpAsyncValidators: SignUpAsyncValidators,
            private userService : UserService){
        
    }

    userForm = new FormGroup({
        'username': new FormControl(null, [Validators.required, Validators.minLength(5)]),
        emailID: new FormControl(null, 
                [Validators.required, Validators.email,
                 this.signUpReactiveFormSyncValidators.validateEmailID.bind(this)],
                 [this.signUpAsyncValidators.checkIfUserAvailable(this.userService)]
            ),
        password: new FormControl(null, 
            [Validators.required, 
            Validators.pattern('(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$')]),
        address: new FormGroup({
            street:  new FormControl(null, Validators.required),
            city:  new FormControl(null, Validators.required),
            state:  new FormControl(null, Validators.required),
            zipCode:  new FormControl(null, Validators.required),
        })
    });
    

    submitForm() {
        console.log(this.userForm)
    }
}
