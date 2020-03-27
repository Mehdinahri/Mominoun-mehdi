import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsdaratnavComponent } from './isdaratnav.component';



const routes: Routes = [{ path: '', component: IsdaratnavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IsdaratnavRoutingModule { }
