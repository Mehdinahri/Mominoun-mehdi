import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryimgRoutingModule } from './galleryimg-routing.module';
import { GalleryimgComponent } from './galleryimg.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it



@NgModule({
  declarations: [GalleryimgComponent],
  imports: [
    CommonModule,
    GalleryimgRoutingModule,
    LazyLoadImageModule
  ],exports:[
    GalleryimgComponent
  ]
})
export class GalleryimgModule { }
