import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectroniaComponent } from './electronia.component';

const routes: Routes = [{ path: '', component: ElectroniaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectroniaRoutingModule { }
