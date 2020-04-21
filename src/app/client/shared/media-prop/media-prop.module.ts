import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPropComponent } from './media-prop.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it




@NgModule({
  declarations: [MediaPropComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],exports:[
    MediaPropComponent
  ]
})
export class MediaPropModule { }
