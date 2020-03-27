import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { TarjamatlistModule } from '../../tarjamat/tarjamatlist/tarjamatlist.module';


@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    TarjamatlistModule
  ]
})
export class BookModule { }
