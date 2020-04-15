import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it




@NgModule({
  declarations: [AuthorComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],exports:[
    AuthorComponent
  ]
})
export class AuthorModule { }
