import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Event02Component } from './event02.component';

const routes: Routes = [{ path: '', component: Event02Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Event02RoutingModule { }
