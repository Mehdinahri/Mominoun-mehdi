import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article02',
  templateUrl: './article02.component.html',
  styleUrls: ['./article02.component.css']
})
export class Article02Component implements OnInit {

  @Input() titrecat: string;

  constructor() { }

  ngOnInit() {
  }

}
