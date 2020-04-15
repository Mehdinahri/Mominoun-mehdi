import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetNews1Component } from './widget-news1.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it



@NgModule({
  declarations: [WidgetNews1Component],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],exports:[
    WidgetNews1Component
  ]
})
export class WidgetNews1Module { }
