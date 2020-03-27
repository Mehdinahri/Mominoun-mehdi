import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';

const routes: Routes = [
  { path: '', component: ClientComponent,
  children: [
  { path: '', loadChildren: () => import('./acceuil/acceuil.module').then(m => m.AcceuilModule) },
  { path: 'dirasat-wa-abhath', loadChildren: () => import('./dirasat-wa-abhath/dirasat-wa-abhath.module').then(m => m.DirasatWaAbhathModule) },
  { path: 'maqalat', loadChildren: () => import('./maqalat/maqalat.module').then(m => m.MaqalatModule) },
  { path: 'tarjamat', loadChildren: () => import('./tarjamat/tarjamat.module').then(m => m.TarjamatModule) },
  { path: 'hiwarat', loadChildren: () => import('./hiwarat/hiwarat.module').then(m => m.HiwaratModule) },
  { path: 'qiraat-fi-kutob', loadChildren: () => import('./qiraat-fi-kutob/qiraat-fi-kutob.module').then(m => m.QiraatFiKutobModule) },
  { path: 'isdarat', loadChildren: () => import('./isdarat/isdarat.module').then(m => m.IsdaratModule) },
  { path: 'anshita', loadChildren: () => import('./anshita/anshita.module').then(m => m.AnshitaModule) },
  { path: 'media', loadChildren: () => import('./media/media.module').then(m => m.MediaModule) }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
