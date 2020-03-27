import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaqalatRoutingModule } from './maqalat-routing.module';
import { MaqalatComponent } from './maqalat.component';
import { ListMaqalatModule } from '../list-maqalat/list-maqalat.module';


@NgModule({
  declarations: [MaqalatComponent],
  imports: [
    CommonModule,
    MaqalatRoutingModule,
    ListMaqalatModule
  ]
})
export class MaqalatModule { }
