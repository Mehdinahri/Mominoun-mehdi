import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnshitatQadimaRoutingModule } from './anshitat-qadima-routing.module';
import { AnshitatQadimaComponent } from './anshitat-qadima.component';
import { ListAbhathModule } from '../../shared/list-abhath/list-abhath.module';


@NgModule({
  declarations: [AnshitatQadimaComponent],
  imports: [
    CommonModule,
    AnshitatQadimaRoutingModule,
    ListAbhathModule
  ]
})
export class AnshitatQadimaModule { }
