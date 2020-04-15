import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTagComponent } from './list-tag.component';



@NgModule({
  declarations: [ListTagComponent],
  imports: [
    CommonModule
  ],exports:[
    ListTagComponent
  ]
})
export class ListTagModule { }
