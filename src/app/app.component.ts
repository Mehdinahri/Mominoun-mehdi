import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mominoun-client';
  closeNav() {
    document.getElementById("menu-left-side").style.left = "-990px";
  }
}
