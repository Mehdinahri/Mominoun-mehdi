import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listisdarat',
  templateUrl: './listisdarat.component.html',
  styleUrls: ['./listisdarat.component.css']
})
export class ListisdaratComponent implements OnInit {

  @Input() titrebook: string;
  constructor() { }

  ngOnInit() {
  }

}
