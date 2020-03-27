import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnshitanavComponent } from './anshitanav.component';



const routes: Routes = [{ path: '', component: AnshitanavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnshitanavRoutingModule { }
