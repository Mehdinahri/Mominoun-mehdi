import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  @Input() paginate: boolean;
  itemsPerPage: number = 30;
  page: number = 1;
  items_count: number = 0;
  @Input() list: any[] = [
    {
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    },{
      name: "سلطان وبصيرة العطاء",
      image: "..\\..\\assets\\img\\002.jpg",
      link: "#"
    }]
  constructor() { }

  ngOnInit() {
    this.paginate=true;
    this.items_count = this.list.length;
  }
  getPage($event) {
    console.log($event)
  }

}
