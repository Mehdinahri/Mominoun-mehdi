import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaMainRoutingModule } from './media-main-routing.module';
import { MediaMainComponent } from './media-main.component';


@NgModule({
  declarations: [MediaMainComponent],
  imports: [
    CommonModule,
    MediaMainRoutingModule
  ]
})
export class MediaMainModule { }
