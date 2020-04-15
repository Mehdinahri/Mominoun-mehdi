import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPropComponent } from './news-prop.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it




@NgModule({
  declarations: [NewsPropComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],exports:[
    NewsPropComponent
  ]
})
export class NewsPropModule { }
