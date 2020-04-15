import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiwaratRoutingModule } from './hiwarat-routing.module';
import { HiwaratComponent } from './hiwarat.component';
import { SecondryNavModule } from '../shared/secondry-nav/secondry-nav.module';
import { Article01Module } from '../shared/article01/article01.module';


@NgModule({
  declarations: [HiwaratComponent],
  imports: [
    CommonModule,
    HiwaratRoutingModule,
    SecondryNavModule,
    Article01Module
  ]
})
export class HiwaratModule { }
