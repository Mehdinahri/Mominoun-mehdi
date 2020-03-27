import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) },
{ path: '', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }