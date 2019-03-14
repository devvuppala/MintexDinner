import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { UserService } from "../services/app.user.service";
import { BrowserModule } from "@angular/platform-browser";
import { MyCustomPipesSharedModule } from "../pipes/app.pipe.module";

//Decorator
@NgModule({
    declarations:[
        LoginComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        MyCustomPipesSharedModule
    ],
    providers:[UserService],
    exports:[LoginComponent]
})

export class LoginModule {

}