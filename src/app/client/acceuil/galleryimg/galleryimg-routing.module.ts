import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryimgComponent } from './galleryimg.component';

const routes: Routes = [{ path: '', component: GalleryimgComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryimgRoutingModule { }
