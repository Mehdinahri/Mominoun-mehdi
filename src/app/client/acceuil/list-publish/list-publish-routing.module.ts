import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPublishComponent } from './list-publish.component';

const routes: Routes = [{ path: '', component: ListPublishComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPublishRoutingModule { }
