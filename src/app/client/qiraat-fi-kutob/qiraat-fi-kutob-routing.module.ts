import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QiraatFiKutobComponent } from './qiraat-fi-kutob.component';

const routes: Routes = [{ path: '', component: QiraatFiKutobComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QiraatFiKutobRoutingModule { }
