import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbhathEamaRoutingModule } from './abhath-eama-routing.module';
import { AbhathEamaComponent } from './abhath-eama.component';
import { ListAbhathModule } from '../list-abhath/list-abhath.module';


@NgModule({
  declarations: [AbhathEamaComponent],
  imports: [
    CommonModule,
    AbhathEamaRoutingModule,
    ListAbhathModule
  ]
})
export class AbhathEamaModule { }
