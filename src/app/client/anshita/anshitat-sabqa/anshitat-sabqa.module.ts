import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnshitatSabqaRoutingModule } from './anshitat-sabqa-routing.module';
import { AnshitatSabqaComponent } from './anshitat-sabqa.component';
import { ListAbhathModule } from '../../shared/list-abhath/list-abhath.module';


@NgModule({
  declarations: [AnshitatSabqaComponent],
  imports: [
    CommonModule,
    AnshitatSabqaRoutingModule,
    ListAbhathModule
  ]
})
export class AnshitatSabqaModule { }
