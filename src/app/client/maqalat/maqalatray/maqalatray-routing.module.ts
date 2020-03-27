import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaqalatrayComponent } from './maqalatray.component';

const routes: Routes = [{ path: '', component: MaqalatrayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaqalatrayRoutingModule { }
