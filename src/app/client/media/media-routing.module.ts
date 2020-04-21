import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaComponent } from './media.component';


const routes: Routes = [
  { path: '', component: MediaComponent ,
children:[
  { path: 'video', loadChildren: () => import('./video/video.module').then(m => m.VideoModule) }, 
  { path: 'images', loadChildren: () => import('./images/images.module').then(m => m.ImagesModule) }, 
  { path: '', loadChildren: () => import('./media-main/media-main.module').then(m => m.MediaMainModule)}
] },  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
