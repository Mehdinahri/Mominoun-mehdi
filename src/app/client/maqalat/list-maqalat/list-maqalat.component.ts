import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-maqalat',
  templateUrl: './list-maqalat.component.html',
  styleUrls: ['./list-maqalat.component.css']
})
export class ListMaqalatComponent implements OnInit {
@Input() title01:string;
  constructor() { }

  ngOnInit() {
  }

}
