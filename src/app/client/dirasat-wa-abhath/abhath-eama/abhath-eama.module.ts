import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbhathEamaComponent } from './abhath-eama.component';
import { ListAbhathModule } from '../../shared/list-abhath/list-abhath.module';
import { AbhathEamaRoutingModule } from './abhath-eama-routing.module';


@NgModule({
  declarations: [AbhathEamaComponent],
  imports: [
    CommonModule,
    AbhathEamaRoutingModule,
    ListAbhathModule
  ]
})
export class AbhathEamaModule { }
