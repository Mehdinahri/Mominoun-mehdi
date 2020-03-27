import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilaffatBahathiyaRoutingModule } from './milaffat-bahathiya-routing.module';
import { MilaffatBahathiyaComponent } from './milaffat-bahathiya.component';
import { ListAbhathModule } from '../list-abhath/list-abhath.module';


@NgModule({
  declarations: [MilaffatBahathiyaComponent],
  imports: [
    CommonModule,
    MilaffatBahathiyaRoutingModule,
    ListAbhathModule
  ]
})
export class MilaffatBahathiyaModule { }
