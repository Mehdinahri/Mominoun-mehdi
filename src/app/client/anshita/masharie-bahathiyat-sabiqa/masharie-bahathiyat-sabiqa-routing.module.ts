import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasharieBahathiyatSabiqaComponent } from './masharie-bahathiyat-sabiqa.component';

const routes: Routes = [{ path: '', component: MasharieBahathiyatSabiqaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasharieBahathiyatSabiqaRoutingModule { }
