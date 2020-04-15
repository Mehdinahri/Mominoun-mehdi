import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAbhathComponent } from './list-abhath.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { WidgetImageModule } from '../widget-image/widget-image.module';
import { WidgetSlidModule } from '../widget-slid/widget-slid.module';
import { WidgetNews1Module } from '../widget-news1/widget-news1.module';



@NgModule({
  declarations: [ListAbhathComponent],
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule,
    NgxPaginationModule,
    WidgetImageModule,
    WidgetNews1Module,
    WidgetSlidModule
  ],exports:[
    ListAbhathComponent
  ]
})
export class ListAbhathModule { }
