import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondarynavComponent } from './secondarynav.component';

const routes: Routes = [{ path: '', component: SecondarynavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondarynavRoutingModule { }
