import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnshitatQadimaComponent } from './anshitat-qadima.component';

const routes: Routes = [{ path: '', component: AnshitatQadimaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnshitatQadimaRoutingModule { }
