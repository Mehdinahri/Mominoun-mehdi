import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaqalatrayRoutingModule } from './maqalatray-routing.module';
import { MaqalatrayComponent } from './maqalatray.component';
import { ListMaqalatModule } from '../list-maqalat/list-maqalat.module';


@NgModule({
  declarations: [MaqalatrayComponent],
  imports: [
    CommonModule,
    MaqalatrayRoutingModule,
    ListMaqalatModule
  ]
})
export class MaqalatrayModule { }
