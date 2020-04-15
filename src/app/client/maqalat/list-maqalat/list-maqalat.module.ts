import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMaqalatComponent } from './list-maqalat.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [ListMaqalatComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    NgxPaginationModule
  ],exports:[
    ListMaqalatComponent
  ]
})
export class ListMaqalatModule { }
