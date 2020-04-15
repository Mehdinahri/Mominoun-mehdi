import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjamatRoutingModule } from './tarjamat-routing.module';
import { TarjamatComponent } from './tarjamat.component';
import { SecondryNavModule } from '../shared/secondry-nav/secondry-nav.module';
import { TarjamatlistModule } from '../shared/tarjamatlist/tarjamatlist.module';


@NgModule({
  declarations: [TarjamatComponent],
  imports: [
    CommonModule,
    TarjamatRoutingModule,
    SecondryNavModule,
    TarjamatlistModule
  ]
})
export class TarjamatModule { }
