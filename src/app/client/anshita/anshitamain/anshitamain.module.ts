import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnshitamainRoutingModule } from './anshitamain-routing.module';
import { AnshitamainComponent } from './anshitamain.component';
import { Event02Module } from '../../acceuil/event02/event02.module';
import { CarouMaqalatModule } from '../../maqalat/carou-maqalat/carou-maqalat.module';


@NgModule({
  declarations: [AnshitamainComponent],
  imports: [
    CommonModule,
    AnshitamainRoutingModule,
    Event02Module,
    CarouMaqalatModule
  ]
})
export class AnshitamainModule { }
