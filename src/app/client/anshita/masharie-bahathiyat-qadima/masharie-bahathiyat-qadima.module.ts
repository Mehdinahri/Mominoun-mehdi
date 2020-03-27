import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasharieBahathiyatQadimaRoutingModule } from './masharie-bahathiyat-qadima-routing.module';
import { MasharieBahathiyatQadimaComponent } from './masharie-bahathiyat-qadima.component';
import { ListAbhathModule } from '../../dirasat-wa-abhath/list-abhath/list-abhath.module';


@NgModule({
  declarations: [MasharieBahathiyatQadimaComponent],
  imports: [
    CommonModule,
    MasharieBahathiyatQadimaRoutingModule,
    ListAbhathModule
  ]
})
export class MasharieBahathiyatQadimaModule { }
