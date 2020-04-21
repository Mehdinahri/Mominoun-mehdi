import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListisdaratComponent } from './listisdarat.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it



@NgModule({
  declarations: [ListisdaratComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],exports:[ListisdaratComponent]
})
export class ListisdaratModule { }
