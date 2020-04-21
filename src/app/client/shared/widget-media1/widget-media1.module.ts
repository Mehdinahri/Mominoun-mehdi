import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetMedia1Component } from './widget-media1.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it




@NgModule({
  declarations: [WidgetMedia1Component],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],exports:[
    WidgetMedia1Component
  ]
})
export class WidgetMedia1Module { }
