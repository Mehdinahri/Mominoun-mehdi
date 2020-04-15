import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-tag',
  templateUrl: './list-tag.component.html',
  styleUrls: ['./list-tag.component.css']
})
export class ListTagComponent implements OnInit {

  @Input() title: string;
  @Input() list: any[] = [
    {
      tag: "مؤمنون",
      link:"#"
    },{
      tag: "مؤمنون",
      link:"#"
    },{
      tag: "مؤمنون",
      link:"#"
    },{
      tag: "مؤمنون",
      link:"#"
    },{
      tag: "مؤمنون",
      link:"#"
    }]
  constructor() { }

  ngOnInit() {
  }

}
