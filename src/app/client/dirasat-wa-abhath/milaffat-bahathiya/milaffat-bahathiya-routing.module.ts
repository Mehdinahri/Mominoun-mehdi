import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilaffatBahathiyaComponent } from './milaffat-bahathiya.component';

const routes: Routes = [{ path: '', component: MilaffatBahathiyaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilaffatBahathiyaRoutingModule { }
