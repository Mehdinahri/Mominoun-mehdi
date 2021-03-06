import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { SecondryNavModule } from '../shared/secondry-nav/secondry-nav.module';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { ListTagModule } from '../shared/list-tag/list-tag.module';
import { NewsPropModule } from '../shared/news-prop/news-prop.module';
import { AuthorModule } from '../shared/author/author.module';
import { WidgetNews1Module } from '../shared/widget-news1/widget-news1.module';
import { WidgetImageModule } from '../shared/widget-image/widget-image.module';


@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SecondryNavModule,
    LazyLoadImageModule,
    ListTagModule,
    NewsPropModule,
    AuthorModule,
    WidgetNews1Module,
    WidgetImageModule
  ]
})
export class ArticleModule { }
