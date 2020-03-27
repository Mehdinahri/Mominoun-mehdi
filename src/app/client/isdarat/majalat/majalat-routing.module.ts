import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MajalatComponent } from './majalat.component';

const routes: Routes = [{ path: '', component: MajalatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MajalatRoutingModule { }
