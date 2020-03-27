import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Magasin01RoutingModule } from './magasin01-routing.module';
import { Magasin01Component } from './magasin01.component';


@NgModule({
  declarations: [Magasin01Component],
  imports: [
    CommonModule,
    Magasin01RoutingModule
  ],exports:[
    Magasin01Component
  ]
})
export class Magasin01Module { }
