import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilaffatBahathiyaComponent } from './milaffat-bahathiya.component';
import { ListAbhathModule } from '../../shared/list-abhath/list-abhath.module';
import { MilaffatBahathiyaRoutingModule } from './milaffat-bahathiya-routing.module';


@NgModule({
  declarations: [MilaffatBahathiyaComponent],
  imports: [
    CommonModule,
    MilaffatBahathiyaRoutingModule,
    ListAbhathModule
  ]
})
export class MilaffatBahathiyaModule { }
