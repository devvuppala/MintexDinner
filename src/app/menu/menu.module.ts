import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MenuSmartComponent } from './app.menu.smart.component';
import { MenuDishComponent } from './app.dish.component';
import { menuService } from './app.menu.service';
import { HttpModule } from '@angular/http';
import { ValidateInputDirective } from '../directives/app.attr.dir.inputColor';
import { NgNotIfDirective } from '../directives/app.str.dir.ngNotIf';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [MenuSmartComponent, MenuDishComponent,ValidateInputDirective,NgNotIfDirective],
  providers:[menuService],
  exports:[MenuSmartComponent]
})
export class MenuModule { }
