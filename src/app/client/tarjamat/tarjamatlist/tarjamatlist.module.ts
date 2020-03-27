import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjamatlistComponent } from './tarjamatlist.component';



@NgModule({
  declarations: [TarjamatlistComponent],
  imports: [
    CommonModule
  ],exports:[
    TarjamatlistComponent
  ]
})
export class TarjamatlistModule { }
