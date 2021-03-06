import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainmaqalatRoutingModule } from './mainmaqalat-routing.module';
import { MainmaqalatComponent } from './mainmaqalat.component';
import { CarouMaqalatModule } from '../../shared/carou-maqalat/carou-maqalat.module';
import { SecondryNavModule } from '../../shared/secondry-nav/secondry-nav.module';
import { Event02Module } from '../../shared/event02/event02.module';
import { ListMaqalatModule } from '../list-maqalat/list-maqalat.module';


@NgModule({
  declarations: [MainmaqalatComponent],
  imports: [
    CommonModule,
    MainmaqalatRoutingModule,
    CarouMaqalatModule,
    SecondryNavModule,
    Event02Module,
    ListMaqalatModule
  ]
})
export class MainmaqalatModule { }
