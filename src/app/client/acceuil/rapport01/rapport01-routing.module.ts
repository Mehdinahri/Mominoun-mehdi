import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rapport01Component } from './rapport01.component';

const routes: Routes = [{ path: '', component: Rapport01Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rapport01RoutingModule { }
