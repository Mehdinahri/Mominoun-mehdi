import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsdaratRoutingModule } from './isdarat-routing.module';
import { IsdaratComponent } from './isdarat.component';
import { IsdaratnavModule } from './isdaratnav/isdaratnav.module';
import { SecondryNavModule } from '../shared/secondry-nav/secondry-nav.module';


@NgModule({
  declarations: [IsdaratComponent],
  imports: [
    CommonModule,
    IsdaratRoutingModule,
    IsdaratnavModule,
    SecondryNavModule
  ]
})
export class IsdaratModule { }
