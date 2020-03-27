import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-magasin01',
  templateUrl: './magasin01.component.html',
  styleUrls: ['./magasin01.component.css']
})
export class Magasin01Component implements OnInit {

  @Input() titremag: string;
  @Input() bgcolor1: string;
  constructor() { }

  ngOnInit() {
  }

}
