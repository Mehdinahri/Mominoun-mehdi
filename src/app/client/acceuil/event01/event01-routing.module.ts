import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Event01Component } from './event01.component';

const routes: Routes = [{ path: '', component: Event01Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Event01RoutingModule { }
