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
  { path: 'media', loadChildren: () => import('./media/media.module').then(m => m.MediaModule) },
  { path: 'article', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) },
  { path: 'author', loadChildren: () => import('./author/author.module').then(m => m.AuthorModule) },
  { path: 'images', loadChildren: () => import('./images/images.module').then(m => m.ImagesModule) },
  { path: 'video', loadChildren: () => import('./video/video.module').then(m => m.VideoModule) },
  { path: 'team', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) },
  { path: 'authors', loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule) },
  { path: 'contactus', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule) },
  { path: 'overview', loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule) },
  { path: 'aboutus', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'formulaires', loadChildren: () => import('./formulaires/formulaires.module').then(m => m.FormulairesModule) },
  { path: 'tags', loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule) },
  { path: 'boardoftrustees', loadChildren: () => import('./boardoftrustees/boardoftrustees.module').then(m => m.BoardoftrusteesModule) }
  ]
 },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
