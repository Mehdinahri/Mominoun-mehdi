import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulairesRoutingModule } from './formulaires-routing.module';
import { FormulairesComponent } from './formulaires.component';
import { SecondryNavModule } from '../shared/secondry-nav/secondry-nav.module';


@NgModule({
  declarations: [FormulairesComponent],
  imports: [
    CommonModule,
    FormulairesRoutingModule,
    SecondryNavModule
  ]
})
export class FormulairesModule { }
