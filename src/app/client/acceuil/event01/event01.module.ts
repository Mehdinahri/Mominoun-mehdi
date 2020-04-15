import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Event01RoutingModule } from './event01-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { Event01Component } from './event01.component';


@NgModule({
  declarations: [Event01Component],
  imports: [
    CommonModule,
    Event01RoutingModule,
    LazyLoadImageModule
  ],exports:[
    Event01Component
  ]
})
export class Event01Module { }
