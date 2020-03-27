import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbhathEamaComponent } from './abhath-eama.component';

const routes: Routes = [{ path: '', component: AbhathEamaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbhathEamaRoutingModule { }
