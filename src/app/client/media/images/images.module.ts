import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesComponent } from './images.component';
import { WidgetImageModule } from '../../shared/widget-image/widget-image.module';
import { WidgetMedia1Module } from '../../shared/widget-media1/widget-media1.module';
import { TarjamatlistModule } from '../../shared/tarjamatlist/tarjamatlist.module';


@NgModule({
  declarations: [ImagesComponent],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    WidgetImageModule,
    WidgetMedia1Module,
    TarjamatlistModule
  ]
})
export class ImagesModule { }
