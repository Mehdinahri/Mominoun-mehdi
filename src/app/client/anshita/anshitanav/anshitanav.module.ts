import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnshitanavComponent } from './anshitanav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AnshitanavComponent],
  imports: [
    CommonModule,    
    RouterModule
  ],exports:[
    AnshitanavComponent
  ]
})
export class AnshitanavModule { }
