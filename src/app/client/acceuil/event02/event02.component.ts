import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event02',
  templateUrl: './event02.component.html',
  styleUrls: ['./event02.component.css']
})
export class Event02Component implements OnInit {

  @Input() title01: string;
  @Input() bgcolor1: string;
  constructor() { }

  ngOnInit() {
  }

}
