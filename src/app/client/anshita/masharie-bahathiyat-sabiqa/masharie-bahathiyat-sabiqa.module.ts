import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasharieBahathiyatSabiqaRoutingModule } from './masharie-bahathiyat-sabiqa-routing.module';
import { MasharieBahathiyatSabiqaComponent } from './masharie-bahathiyat-sabiqa.component';
import { ListAbhathModule } from '../../shared/list-abhath/list-abhath.module';


@NgModule({
  declarations: [MasharieBahathiyatSabiqaComponent],
  imports: [
    CommonModule,
    MasharieBahathiyatSabiqaRoutingModule,
    ListAbhathModule
  ]
})
export class MasharieBahathiyatSabiqaModule { }
