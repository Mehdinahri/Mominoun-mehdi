import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjamatlistComponent } from './tarjamatlist.component';

import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module



@NgModule({
  declarations: [TarjamatlistComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    NgxPaginationModule
  ],exports:[
    TarjamatlistComponent
  ]
})
export class TarjamatlistModule { }
