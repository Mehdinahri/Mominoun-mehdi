import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article01Component } from './article01.component';

const routes: Routes = [{ path: '', component: Article01Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Article01RoutingModule { }
