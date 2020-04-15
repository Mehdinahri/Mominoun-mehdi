import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondryNavRoutingModule } from './secondry-nav-routing.module';
import { SecondryNavComponent } from './secondry-nav.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it


@NgModule({
  declarations: [SecondryNavComponent],
  imports: [
    CommonModule,
    SecondryNavRoutingModule,
    LazyLoadImageModule
  ],exports:[
    SecondryNavComponent
  ]
})
export class SecondryNavModule { }
