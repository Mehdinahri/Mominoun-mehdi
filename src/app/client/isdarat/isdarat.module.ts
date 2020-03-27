import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsdaratRoutingModule } from './isdarat-routing.module';
import { IsdaratComponent } from './isdarat.component';
import { IsdaratnavModule } from './isdaratnav/isdaratnav.module';
import { SecondryNavModule } from '../acceuil/secondry-nav/secondry-nav.module';
import { ItemMenuContentModule } from './item-menu-content/item-menu-content.module';


@NgModule({
  declarations: [IsdaratComponent],
  imports: [
    CommonModule,
    IsdaratRoutingModule,
    IsdaratnavModule,
    SecondryNavModule,
    ItemMenuContentModule
  ]
})
export class IsdaratModule { }
