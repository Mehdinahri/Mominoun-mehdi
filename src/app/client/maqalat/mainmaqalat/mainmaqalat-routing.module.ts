import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainmaqalatComponent } from './mainmaqalat.component';

const routes: Routes = [{ path: '', component: MainmaqalatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainmaqalatRoutingModule { }
