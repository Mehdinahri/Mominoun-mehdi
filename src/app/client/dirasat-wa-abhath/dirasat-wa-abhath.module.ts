import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirasatWaAbhathRoutingModule } from './dirasat-wa-abhath-routing.module';
import { DirasatWaAbhathComponent } from './dirasat-wa-abhath.component';
import { SecondarynavModule } from './secondarynav/secondarynav.module';


@NgModule({
  declarations: [DirasatWaAbhathComponent],
  imports: [
    CommonModule,
    DirasatWaAbhathRoutingModule,
    SecondarynavModule
  ]
})
export class DirasatWaAbhathModule { }
