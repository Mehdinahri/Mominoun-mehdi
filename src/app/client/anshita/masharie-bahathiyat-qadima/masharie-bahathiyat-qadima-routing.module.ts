import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasharieBahathiyatQadimaComponent } from './masharie-bahathiyat-qadima.component';

const routes: Routes = [{ path: '', component: MasharieBahathiyatQadimaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasharieBahathiyatQadimaRoutingModule { }
