import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSliderComponent } from './app-slider.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it


@NgModule({
  declarations: [AppSliderComponent],
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule
  ],exports:[
    AppSliderComponent
  ]
})
export class AppSliderModule { }
