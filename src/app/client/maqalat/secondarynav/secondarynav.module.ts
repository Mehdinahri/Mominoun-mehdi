import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondarynavRoutingModule } from './secondarynav-routing.module';
import { SecondarynavComponent } from './secondarynav.component';


@NgModule({
  declarations: [SecondarynavComponent],
  imports: [
    CommonModule,
    SecondarynavRoutingModule
  ],exports:[
    SecondarynavComponent
  ]
})
export class SecondarynavModule { }
