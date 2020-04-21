import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MediaNavComponent } from './media-nav.component';



@NgModule({
  declarations: [MediaNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[
    MediaNavComponent
  ]
})
export class MediaNavModule { }
