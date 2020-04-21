import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { WidgetImageModule } from '../shared/widget-image/widget-image.module';
import { SecondryNavModule } from '../shared/secondry-nav/secondry-nav.module';
import { WidgetMedia1Module } from '../shared/widget-media1/widget-media1.module';


@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    VideoRoutingModule,
    SecondryNavModule,
    WidgetImageModule,
    WidgetMedia1Module,
  ]
})
export class VideoModule { }
