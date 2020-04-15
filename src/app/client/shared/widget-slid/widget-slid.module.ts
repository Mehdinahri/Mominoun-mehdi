import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetSlidComponent } from './widget-slid.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it



@NgModule({
  declarations: [WidgetSlidComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],exports:[
    WidgetSlidComponent
  ]
})
export class WidgetSlidModule { }
