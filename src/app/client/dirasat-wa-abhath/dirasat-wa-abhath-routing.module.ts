import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirasatWaAbhathComponent } from './dirasat-wa-abhath.component';

const routes: Routes = [
  { path: '', component: DirasatWaAbhathComponent,
  children:[
  { path: '', loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule) },
  { path: 'abhath-eama', loadChildren: () => import('./abhath-eama/abhath-eama.module').then(m => m.AbhathEamaModule) },
  { path: 'abhath-mahkama', loadChildren: () => import('./abhath-mahkama/abhath-mahkama.module').then(m => m.AbhathMahkamaModule) } ,
  { path: 'milaffat-bahathiya', loadChildren: () => import('./milaffat-bahathiya/milaffat-bahathiya.module').then(m => m.MilaffatBahathiyaModule) }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirasatWaAbhathRoutingModule { }
