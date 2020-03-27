import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';

const routes: Routes = [{ path: '', component: HeaderComponent,
children: [
  { path: 'topnav', loadChildren: () => import('./topnav/topnav.module').then(m => m.TopnavModule) }
]
}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
