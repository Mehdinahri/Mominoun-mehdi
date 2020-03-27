import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectroniaRoutingModule } from './electronia-routing.module';
import { ElectroniaComponent } from './electronia.component';
import { TarjamatlistModule } from '../../tarjamat/tarjamatlist/tarjamatlist.module';


@NgModule({
  declarations: [ElectroniaComponent],
  imports: [
    CommonModule,
    ElectroniaRoutingModule,
    TarjamatlistModule
  ]
})
export class ElectroniaModule { }
