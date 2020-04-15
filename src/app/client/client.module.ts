import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { WidgetMediaImgComponent } from './shared/widget-media-img/widget-media-img.component';


@NgModule({
  declarations: [ClientComponent, WidgetMediaImgComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class ClientModule { }
