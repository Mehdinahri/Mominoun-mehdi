import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Event02RoutingModule } from './event02-routing.module';
import { Event02Component } from './event02.component';


@NgModule({
  declarations: [Event02Component],
  imports: [
    CommonModule,
    Event02RoutingModule
  ],exports:[
    Event02Component
  ]
})
export class Event02Module { }
