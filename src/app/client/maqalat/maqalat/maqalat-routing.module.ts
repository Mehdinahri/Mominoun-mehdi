import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaqalatComponent } from './maqalat.component';

const routes: Routes = [{ path: '', component: MaqalatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaqalatRoutingModule { }
