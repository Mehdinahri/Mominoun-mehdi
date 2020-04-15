import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondarynavComponent } from './secondarynav.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SecondarynavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[
    SecondarynavComponent
  ]
})
export class SecondarynavModule { }
