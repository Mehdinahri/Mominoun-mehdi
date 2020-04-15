import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetImageComponent } from './widget-image.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it



@NgModule({
  declarations: [WidgetImageComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],exports:[
    WidgetImageComponent
  ]
})
export class WidgetImageModule { }
