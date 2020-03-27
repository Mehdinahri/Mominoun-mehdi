import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaqalatRoutingModule } from './maqalat-routing.module';
import { MaqalatComponent } from './maqalat.component';
import { SecondarynavModule } from './secondarynav/secondarynav.module';


@NgModule({
  declarations: [MaqalatComponent],
  imports: [
    CommonModule,
    MaqalatRoutingModule,
    SecondarynavModule
  ]
})
export class MaqalatModule { }
