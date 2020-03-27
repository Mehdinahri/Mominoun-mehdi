import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjamatlist',
  templateUrl: './tarjamatlist.component.html',
  styleUrls: ['./tarjamatlist.component.css']
})
export class TarjamatlistComponent implements OnInit {

  @Input() titrebook: string;
  constructor() { }

  ngOnInit() {
  }

}
