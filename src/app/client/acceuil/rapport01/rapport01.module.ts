import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rapport01RoutingModule } from './rapport01-routing.module';
import { Rapport01Component } from './rapport01.component';


@NgModule({
  declarations: [Rapport01Component],
  imports: [
    CommonModule,
    Rapport01RoutingModule
  ],exports:[
    Rapport01Component
  ]
})
export class Rapport01Module { }
