import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsdaratnavComponent } from './isdaratnav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [IsdaratnavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[
    IsdaratnavComponent
  ]
})
export class IsdaratnavModule { }
