import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPublishRoutingModule } from './list-publish-routing.module';
import { ListPublishComponent } from './list-publish.component';


@NgModule({
  declarations: [ListPublishComponent],
  imports: [
    CommonModule,
    ListPublishRoutingModule
  ],exports:[
    ListPublishComponent
  ]
})
export class ListPublishModule { }
