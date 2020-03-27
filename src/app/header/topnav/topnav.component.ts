import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }
  openNav() {
    document.getElementById("menu-left-side").style.left = "0px";
  }
  ngOnInit() {
  }

}
