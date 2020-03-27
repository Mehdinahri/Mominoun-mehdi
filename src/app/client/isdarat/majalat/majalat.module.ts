import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MajalatRoutingModule } from './majalat-routing.module';
import { MajalatComponent } from './majalat.component';
import { TarjamatlistModule } from '../../tarjamat/tarjamatlist/tarjamatlist.module';


@NgModule({
  declarations: [MajalatComponent],
  imports: [
    CommonModule,
    MajalatRoutingModule,
    TarjamatlistModule
  ]
})
export class MajalatModule { }
