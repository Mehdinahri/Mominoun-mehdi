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
  @Input() list: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      date: "Oct 2, 2016"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      date: "Oct 2, 2016"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      date: "Oct 2, 2016"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      date: "Oct 2, 2016"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      date: "Oct 2, 2016"

    }
  ]
  constructor() { }
  
  ngOnInit() {
  }
  
}