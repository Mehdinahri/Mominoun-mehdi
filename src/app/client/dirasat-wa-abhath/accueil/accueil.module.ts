import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil.component';
import { AppSliderModule } from '../../shared/app-slider/app-slider.module';
import { Article01Module } from '../../shared/article01/article01.module';
import { Event02Module } from '../../shared/event02/event02.module';
import { SecondryNavModule } from '../../shared/secondry-nav/secondry-nav.module';


@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    AppSliderModule,
    Article01Module,
    Event02Module,
    SecondryNavModule
  ]
})
export class AccueilModule { }
