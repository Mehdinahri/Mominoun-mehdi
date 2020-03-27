import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilComponent } from './acceuil.component';

const routes: Routes = [{ path: '', component: AcceuilComponent},
{ path: '', loadChildren: () => import('./secondry-nav/secondry-nav.module').then(m => m.SecondryNavModule) },
{ path: 'app-slider', loadChildren: () => import('./app-slider/app-slider.module').then(m => m.AppSliderModule) },
{ path: 'article01', loadChildren: () => import('./article01/article01.module').then(m => m.Article01Module) },
{ path: 'rapport01', loadChildren: () => import('./rapport01/rapport01.module').then(m => m.Rapport01Module) },
{ path: 'article02', loadChildren: () => import('./article02/article02.module').then(m => m.Article02Module) },
{ path: 'magasin01', loadChildren: () => import('./magasin01/magasin01.module').then(m => m.Magasin01Module) },
{ path: 'event01', loadChildren: () => import('./event01/event01.module').then(m => m.Event01Module) },
{ path: 'event02', loadChildren: () => import('./event02/event02.module').then(m => m.Event02Module) },
{ path: 'galleryimg', loadChildren: () => import('./galleryimg/galleryimg.module').then(m => m.GalleryimgModule) },
{ path: 'List-publish', loadChildren: () => import('./list-publish/list-publish.module').then(m => m.ListPublishModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceuilRoutingModule { }
