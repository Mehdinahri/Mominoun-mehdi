import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rapport01RoutingModule } from './rapport01-routing.module';
import { Rapport01Component } from './rapport01.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { WidgetImageModule } from '../../shared/widget-image/widget-image.module';
import { WidgetNews1Module } from '../../shared/widget-news1/widget-news1.module';
import { WidgetSlidModule } from '../../shared/widget-slid/widget-slid.module';


@NgModule({
  declarations: [Rapport01Component],
  imports: [
    CommonModule,
    Rapport01RoutingModule,
    LazyLoadImageModule,
    WidgetImageModule,
    WidgetNews1Module,
    WidgetSlidModule,
    
  ],exports:[
    Rapport01Component
  ]
})
export class Rapport01Module { }
