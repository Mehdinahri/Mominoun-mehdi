import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsdaratnavComponent } from './isdaratnav.component';
import { IsdaratnavRoutingModule } from './isdaratnav-routing.module';
import { ItemMenuContentModule } from '../item-menu-content/item-menu-content.module';



@NgModule({
  declarations: [IsdaratnavComponent],
  imports: [
    CommonModule,
    IsdaratnavRoutingModule,
    ItemMenuContentModule
  ],exports:[
    IsdaratnavComponent
  ]
})
export class IsdaratnavModule { }
