import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardoftrusteesRoutingModule } from './boardoftrustees-routing.module';
import { BoardoftrusteesComponent } from './boardoftrustees.component';


@NgModule({
  declarations: [BoardoftrusteesComponent],
  imports: [
    CommonModule,
    BoardoftrusteesRoutingModule
  ]
})
export class BoardoftrusteesModule { }
