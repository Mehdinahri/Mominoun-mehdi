import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainisdaratRoutingModule } from './mainisdarat-routing.module';
import { MainisdaratComponent } from './mainisdarat.component';
import { Magasin01Module } from '../../shared/magasin01/magasin01.module';
import { ListisdaratModule } from '../../shared/listisdarat/listisdarat.module';


@NgModule({
  declarations: [MainisdaratComponent],
  imports: [
    CommonModule,
    MainisdaratRoutingModule,
    Magasin01Module,
    ListisdaratModule
  ]
})
export class MainisdaratModule { }
