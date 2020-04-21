import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesComponent } from './images.component';
import { SecondryNavModule } from '../shared/secondry-nav/secondry-nav.module';
import { NgxGalleryModule } from 'ngx-gallery';
import { WidgetImageModule } from '../shared/widget-image/widget-image.module';
import { WidgetMedia1Module } from '../shared/widget-media1/widget-media1.module';
import { MediaPropModule } from '../shared/media-prop/media-prop.module';



@NgModule({
  declarations: [ImagesComponent],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    SecondryNavModule,
    NgxGalleryModule,
    WidgetImageModule,
    WidgetMedia1Module,
    MediaPropModule
  ]
})
export class ImagesModule { }
