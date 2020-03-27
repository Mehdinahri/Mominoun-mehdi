import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemMenuContentComponent } from './item-menu-content.component';



@NgModule({
  declarations: [ItemMenuContentComponent],
  imports: [
    CommonModule
  ], exports:[
    ItemMenuContentComponent
  ]
})
export class ItemMenuContentModule { }
