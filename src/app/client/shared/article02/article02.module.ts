import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Article02RoutingModule } from './article02-routing.module';
import { Article02Component } from './article02.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it


@NgModule({
  declarations: [Article02Component],
  imports: [
    CommonModule,
    Article02RoutingModule,
    LazyLoadImageModule
  ],exports:[
    Article02Component
  ]
})
export class Article02Module { }
