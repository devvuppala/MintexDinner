import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { UserService } from "../services/app.user.service";
import { BrowserModule } from "@angular/platform-browser";

//Decorator
@NgModule({
    declarations:[
        LoginComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    providers:[UserService],
    exports:[LoginComponent]
})

export class LoginModule {

}