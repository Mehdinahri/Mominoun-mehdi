import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppSliderComponent } from './app-slider.component';

const routes: Routes = [{ path: '', component: AppSliderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSliderRoutingModule { }
