import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnshitaRoutingModule } from './anshita-routing.module';
import { AnshitaComponent } from './anshita.component';
import { SecondryNavModule } from '../acceuil/secondry-nav/secondry-nav.module';
import { AnshitanavModule } from './anshitanav/anshitanav.module';


@NgModule({
  declarations: [AnshitaComponent],
  imports: [
    CommonModule,
    AnshitaRoutingModule,
    SecondryNavModule,
    AnshitanavModule
  ]
})
export class AnshitaModule { }
