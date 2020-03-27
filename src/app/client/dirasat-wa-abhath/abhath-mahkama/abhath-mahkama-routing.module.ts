import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbhathMahkamaComponent } from './abhath-mahkama.component';

const routes: Routes = [{ path: '', component: AbhathMahkamaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbhathMahkamaRoutingModule { }
