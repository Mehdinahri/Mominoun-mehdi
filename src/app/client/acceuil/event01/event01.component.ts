import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event01',
  templateUrl: './event01.component.html',
  styleUrls: ['./event01.component.css']
})
export class Event01Component implements OnInit {

  @Input() listanchita: any[] = [
    {
      image: "https://via.placeholder.com/276x126/ddd",

    },{
      image: "https://via.placeholder.com/276x126/00b",

    },{
      image: "https://via.placeholder.com/276x126/b00",

    },{
      image: "https://via.placeholder.com/276x126/0r0",

    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
