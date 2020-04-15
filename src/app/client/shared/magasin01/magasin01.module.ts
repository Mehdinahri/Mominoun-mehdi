import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Magasin01RoutingModule } from './magasin01-routing.module';
import { Magasin01Component } from './magasin01.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it



@NgModule({
  declarations: [Magasin01Component],
  imports: [
    CommonModule,
    Magasin01RoutingModule,
    LazyLoadImageModule
  ],exports:[
    Magasin01Component
  ]
})
export class Magasin01Module { }
