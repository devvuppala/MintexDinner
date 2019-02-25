import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MenuSmartComponent } from './app.menu.smart.component';
import { MenuDishComponent } from './app.dish.component';
import { menuService } from './app.menu.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [MenuSmartComponent, MenuDishComponent],
  providers:[menuService],
  exports:[MenuSmartComponent]
})
export class MenuModule { }
