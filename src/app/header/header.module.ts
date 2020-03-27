import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { TopnavModule } from './topnav/topnav.module';
import { MainnavModule } from './mainnav/mainnav.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    TopnavModule,
    MainnavModule
  ],exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
