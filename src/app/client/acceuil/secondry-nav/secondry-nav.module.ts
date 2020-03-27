import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondryNavRoutingModule } from './secondry-nav-routing.module';
import { SecondryNavComponent } from './secondry-nav.component';


@NgModule({
  declarations: [SecondryNavComponent],
  imports: [
    CommonModule,
    SecondryNavRoutingModule
  ],exports:[
    SecondryNavComponent
  ]
})
export class SecondryNavModule { }
