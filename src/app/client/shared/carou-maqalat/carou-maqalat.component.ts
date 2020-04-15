import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carou-maqalat',
  templateUrl: './carou-maqalat.component.html',
  styleUrls: ['./carou-maqalat.component.css']
})
export class CarouMaqalatComponent implements OnInit {

  @Input() bgcolor1: string;
  constructor() { }

  ngOnInit() {
  }

}
