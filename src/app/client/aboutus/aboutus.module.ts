import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './aboutus.component';
import { SecondryNavModule } from '../shared/secondry-nav/secondry-nav.module';



@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    SecondryNavModule
  ]
})
export class AboutusModule { }
