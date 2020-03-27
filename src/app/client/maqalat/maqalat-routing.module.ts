import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaqalatComponent } from './maqalat.component';

const routes: Routes = [{ path: '', component: MaqalatComponent,children:[
  { path: '', loadChildren: () => import('./mainmaqalat/mainmaqalat.module').then(m => m.MainmaqalatModule) },
  { path: 'maqalatray', loadChildren: () => import('./maqalatray/maqalatray.module').then(m => m.MaqalatrayModule) },
  { path: 'maqalat', loadChildren: () => import('./maqalat/maqalat.module').then(m => m.MaqalatModule) }
] }, 
{ path: 'maqalat/secondarynav', loadChildren: () => import('./secondarynav/secondarynav.module').then(m => m.SecondarynavModule) }, 
{ path: 'maqalat/mainmaqalat', loadChildren: () => import('./mainmaqalat/mainmaqalat.module').then(m => m.MainmaqalatModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaqalatRoutingModule { }
