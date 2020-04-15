import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { NewsPropModule } from '../shared/news-prop/news-prop.module';
import { WidgetNews1Module } from '../shared/widget-news1/widget-news1.module';
import { WidgetImageModule } from '../shared/widget-image/widget-image.module';
import { WidgetSlidModule } from '../shared/widget-slid/widget-slid.module';
import { SecondryNavModule } from '../shared/secondry-nav/secondry-nav.module';


@NgModule({
  declarations: [AuthorComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    LazyLoadImageModule,
    NewsPropModule,
    WidgetImageModule,
    WidgetNews1Module,
    SecondryNavModule,
    WidgetSlidModule
  ]
})
export class AuthorModule { }
