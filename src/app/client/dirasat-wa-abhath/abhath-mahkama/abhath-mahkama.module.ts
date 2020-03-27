import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbhathMahkamaRoutingModule } from './abhath-mahkama-routing.module';
import { AbhathMahkamaComponent } from './abhath-mahkama.component';
import { ListAbhathModule } from '../list-abhath/list-abhath.module';


@NgModule({
  declarations: [AbhathMahkamaComponent],
  imports: [
    CommonModule,
    AbhathMahkamaRoutingModule,
    ListAbhathModule
  ]
})
export class AbhathMahkamaModule { }
