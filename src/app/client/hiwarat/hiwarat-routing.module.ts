import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiwaratComponent } from './hiwarat.component';

const routes: Routes = [{ path: '', component: HiwaratComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HiwaratRoutingModule { }
