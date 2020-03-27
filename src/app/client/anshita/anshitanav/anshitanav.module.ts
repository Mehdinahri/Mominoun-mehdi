import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnshitanavComponent } from './anshitanav.component';
import { AnshitanavRoutingModule } from './anshitanav-routing.module';



@NgModule({
  declarations: [AnshitanavComponent],
  imports: [
    CommonModule,
    AnshitanavRoutingModule
  ],exports:[
    AnshitanavComponent
  ]
})
export class AnshitanavModule { }
