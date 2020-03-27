import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article02Component } from './article02.component';

const routes: Routes = [{ path: '', component: Article02Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Article02RoutingModule { }
