import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsdaratnavComponent } from './isdaratnav.component';
import { ItemMenuContentModule } from '../item-menu-content/item-menu-content.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [IsdaratnavComponent],
  imports: [
    CommonModule,
    RouterModule,
    ItemMenuContentModule
  ],exports:[
    IsdaratnavComponent
  ]
})
export class IsdaratnavModule { }
