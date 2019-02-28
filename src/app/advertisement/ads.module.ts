import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AdsComponent } from './ads.container.component';
import { AdsService } from './ads.service';
import { SingleAdvertisementComponent } from './ads.single.advertisement.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [AdsComponent, SingleAdvertisementComponent],
  providers:[AdsService],
  exports:[AdsComponent],
  entryComponents:[SingleAdvertisementComponent]
})
export class AdsModule { }
