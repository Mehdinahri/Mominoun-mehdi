import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import { AcceuilComponent } from './acceuil.component';
import { AppSliderModule } from '../shared/app-slider/app-slider.module';
import { Article01Module } from '../shared/article01/article01.module';
import { Rapport01Module } from './rapport01/rapport01.module';
import { Article02Module } from '../shared/article02/article02.module';
import { Magasin01Module } from '../shared/magasin01/magasin01.module';
import { Event01Module } from './event01/event01.module';
import { Event02Module } from '../shared/event02/event02.module';
import { GalleryimgModule } from '../shared/galleryimg/galleryimg.module';
import { ListPublishModule } from './list-publish/list-publish.module';
import { SecondryNavModule } from '../shared/secondry-nav/secondry-nav.module';


@NgModule({
  declarations: [AcceuilComponent],
  imports: [
    CommonModule,
    AcceuilRoutingModule,
    AppSliderModule,
    Article01Module,
    Rapport01Module,
    Article02Module,
    Magasin01Module,
    Event01Module,
    Event02Module,
    GalleryimgModule,
    ListPublishModule,
    SecondryNavModule
  ]
})
export class AcceuilModule { }
