import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { WidgetImageModule } from '../shared/widget-image/widget-image.module';
import { WidgetNews1Module } from '../shared/widget-news1/widget-news1.module';
import { WidgetSlidModule } from '../shared/widget-slid/widget-slid.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    TagsRoutingModule,
    LazyLoadImageModule,
    WidgetImageModule,
    WidgetNews1Module,
    WidgetSlidModule,
    NgxPaginationModule
  ]
})
export class TagsModule { }
