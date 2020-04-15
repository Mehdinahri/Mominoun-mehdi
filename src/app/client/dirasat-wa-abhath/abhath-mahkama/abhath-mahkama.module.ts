import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbhathMahkamaComponent } from './abhath-mahkama.component';
import { ListAbhathModule } from '../../shared/list-abhath/list-abhath.module';
import { AbhathMahkamaRoutingModule } from './abhath-mahkama-routing.module';


@NgModule({
  declarations: [AbhathMahkamaComponent],
  imports: [
    CommonModule,
    AbhathMahkamaRoutingModule,
    ListAbhathModule
  ]
})
export class AbhathMahkamaModule { }
