import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './app-slider.component.html',
  styleUrls: ['./app-slider.component.css']
})
export class AppSliderComponent implements OnInit {

  @Input() title01: string;
  @Input() bgcolor1: string;
  @Input() bgcolor2: string;
  constructor() { }
  
  ngOnInit() {
  }
  
}