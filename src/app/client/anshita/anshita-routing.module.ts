import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnshitaComponent } from './anshita.component';

const routes: Routes = [{ path: '', component: AnshitaComponent,
children: [
  { path: '', loadChildren: () => import('./anshitamain/anshitamain.module').then(m => m.AnshitamainModule) },
  { path: 'anshitat-qadima', loadChildren: () => import('./anshitat-qadima/anshitat-qadima.module').then(m => m.AnshitatQadimaModule) },
  { path: 'anshitat-sabiqa', loadChildren: () => import('./anshitat-sabqa/anshitat-sabqa.module').then(m => m.AnshitatSabqaModule) },
  { path: 'masharie-bahathiyat-qadima', loadChildren: () => import('./masharie-bahathiyat-qadima/masharie-bahathiyat-qadima.module').then(m => m.MasharieBahathiyatQadimaModule) },
  { path: 'masharie-bahathiyat-sabiqa', loadChildren: () => import('./masharie-bahathiyat-sabiqa/masharie-bahathiyat-sabiqa.module').then(m => m.MasharieBahathiyatSabiqaModule) }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnshitaRoutingModule { }
