import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Magasin01Component } from './magasin01.component';

const routes: Routes = [{ path: '', component: Magasin01Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Magasin01RoutingModule { }
