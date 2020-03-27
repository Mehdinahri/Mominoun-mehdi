import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class ClientModule { }
