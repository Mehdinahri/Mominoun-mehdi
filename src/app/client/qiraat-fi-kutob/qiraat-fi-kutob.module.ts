import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QiraatFiKutobRoutingModule } from './qiraat-fi-kutob-routing.module';
import { QiraatFiKutobComponent } from './qiraat-fi-kutob.component';
import { SecondryNavModule } from '../acceuil/secondry-nav/secondry-nav.module';
import { Article01Module } from '../acceuil/article01/article01.module';


@NgModule({
  declarations: [QiraatFiKutobComponent],
  imports: [
    CommonModule,
    QiraatFiKutobRoutingModule,
    SecondryNavModule,
    Article01Module
  ]
})
export class QiraatFiKutobModule { }
