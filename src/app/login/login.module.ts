import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { UserService } from "../services/app.user.service";
import { MyCustomPipesSharedModule } from "../pipes/app.pipe.module";
import { LogoutComponent } from "./logout.component";
import { CommonModule } from "@angular/common";
import { LanguageService } from "../services/app.language.service";

//Decorator
@NgModule({
    declarations:[
        LoginComponent,LogoutComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        MyCustomPipesSharedModule
    ],
    providers:[UserService, LanguageService],
    exports:[LoginComponent]
})

export class LoginModule {

}