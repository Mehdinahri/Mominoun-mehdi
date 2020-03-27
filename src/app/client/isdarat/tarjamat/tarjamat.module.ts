import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjamatRoutingModule } from './tarjamat-routing.module';
import { TarjamatComponent } from './tarjamat.component';


@NgModule({
  declarations: [TarjamatComponent],
  imports: [
    CommonModule,
    TarjamatRoutingModule
  ]
})
export class TarjamatModule { }
