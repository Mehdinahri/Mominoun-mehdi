import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article01',
  templateUrl: './article01.component.html',
  styleUrls: ['./article01.component.css']
})
export class Article01Component implements OnInit {

  @Input() title01: string;
  constructor() { }

  ngOnInit() {
  }

}
