import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Event02RoutingModule } from './event02-routing.module';
import { Event02Component } from './event02.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it



@NgModule({
  declarations: [Event02Component],
  imports: [
    CommonModule,
    Event02RoutingModule,
    LazyLoadImageModule
  ],exports:[
    Event02Component
  ]
})
export class Event02Module { }
