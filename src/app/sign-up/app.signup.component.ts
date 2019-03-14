import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from '../login/login.user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './app.signup.html',
  styles:[ `
    .validationErrorMessage {
        color: red;
        font-style: italic;
    }
    .validationsuccessMessage {
        color: green;
        font-style: italic;
    }

    .ng-valid[required], .ng-valid.required  {
        border-right: 5px solid #42A948; /* green */
      }
      
      .ng-invalid:not(form)  {
        border-right: 5px solid #a94442; /* red */
      }
  `]
})

export class SignUpComponent {

    userToBeRegistered: User = new User(null,null,null);

    registerUser(signUpForm) {
        console.log(signUpForm);
        console.log(this.userToBeRegistered);
    }

}
