import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  openNav() {
    document.getElementById("menu-left-side").style.left = "0px";
  }
  closeNav() {
    document.getElementById("menu-left-side").style.left = "-990px";
  }
  ngOnInit() {
  }

}
