import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryimgRoutingModule } from './galleryimg-routing.module';
import { GalleryimgComponent } from './galleryimg.component';


@NgModule({
  declarations: [GalleryimgComponent],
  imports: [
    CommonModule,
    GalleryimgRoutingModule
  ],exports:[
    GalleryimgComponent
  ]
})
export class GalleryimgModule { }
