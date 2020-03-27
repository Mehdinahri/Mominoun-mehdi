import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnshitatSabqaComponent } from './anshitat-sabqa.component';

const routes: Routes = [{ path: '', component: AnshitatSabqaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnshitatSabqaRoutingModule { }
