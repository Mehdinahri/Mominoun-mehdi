import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { MediaNavModule } from './media-nav/media-nav.module';
import { SecondryNavModule } from '../shared/secondry-nav/secondry-nav.module';


@NgModule({
  declarations: [MediaComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    MediaNavModule,
    SecondryNavModule
  ]
})
export class MediaModule { }
