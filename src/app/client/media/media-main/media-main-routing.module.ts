import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaMainComponent } from './media-main.component';

const routes: Routes = [{ path: '', component: MediaMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaMainRoutingModule { }
