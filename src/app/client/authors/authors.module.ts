import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import { SecondryNavModule } from '../shared/secondry-nav/secondry-nav.module';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { WidgetNews1Module } from '../shared/widget-news1/widget-news1.module';
import { WidgetImageModule } from '../shared/widget-image/widget-image.module';
import { WidgetSlidModule } from '../shared/widget-slid/widget-slid.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    LazyLoadImageModule,
    WidgetImageModule,
    WidgetNews1Module,
    SecondryNavModule,
    WidgetSlidModule,
    NgxPaginationModule
  ]
})
export class AuthorsModule { }
