import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondryNavComponent } from './secondry-nav.component';

const routes: Routes = [{ path: '', component: SecondryNavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondryNavRoutingModule { }
