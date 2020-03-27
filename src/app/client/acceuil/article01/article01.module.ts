import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Article01Component } from './article01.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [Article01Component],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    NgxPaginationModule
  ],exports:[
    Article01Component
  ]
})
export class Article01Module { }
