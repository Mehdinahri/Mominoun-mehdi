import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainisdaratComponent } from './mainisdarat.component';

const routes: Routes = [{ path: '', component: MainisdaratComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainisdaratRoutingModule { }
