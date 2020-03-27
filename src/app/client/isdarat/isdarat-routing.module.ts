import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsdaratComponent } from './isdarat.component';

const routes: Routes = [
  { path: '', component: IsdaratComponent ,
  children:[
    { path: '', loadChildren: () => import('./mainisdarat/mainisdarat.module').then(m => m.MainisdaratModule) }, 
    { path: 'electronia', loadChildren: () => import('./electronia/electronia.module').then(m => m.ElectroniaModule) }, 
    { path: 'book', loadChildren: () => import('./book/book.module').then(m => m.BookModule) },
     { path: 'makatib-al-bayii', loadChildren: () => import('./tarjamat/tarjamat.module').then(m => m.TarjamatModule) }, 
     { path: 'majalat', loadChildren: () => import('./majalat/majalat.module').then(m => m.MajalatModule) }
] },  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IsdaratRoutingModule { }
