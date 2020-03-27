import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Article01RoutingModule } from './article01-routing.module';
import { Article01Component } from './article01.component';


@NgModule({
  declarations: [Article01Component],
  imports: [
    CommonModule,
    Article01RoutingModule
  ],exports:[
    Article01Component
  ]
})
export class Article01Module { }
