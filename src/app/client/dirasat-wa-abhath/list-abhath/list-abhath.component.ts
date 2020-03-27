import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-abhath',
  templateUrl: './list-abhath.component.html',
  styleUrls: ['./list-abhath.component.css']
})
export class ListAbhathComponent implements OnInit {

  @Input() title02: string;
  @Input() bgcolor1: string;
  constructor() { }

  ngOnInit() {
  }

}
