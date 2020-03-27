import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSliderRoutingModule } from './app-slider-routing.module';
import { AppSliderComponent } from './app-slider.component';


@NgModule({
  declarations: [AppSliderComponent],
  imports: [
    CommonModule,
    AppSliderRoutingModule
  ],exports:[
    AppSliderComponent
  ]
})
export class AppSliderModule { }
