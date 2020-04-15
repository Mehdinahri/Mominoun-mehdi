import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-news1',
  templateUrl: './widget-news1.component.html',
  styleUrls: ['./widget-news1.component.css']
})
export class WidgetNews1Component implements OnInit {

  @Input() title1: string;
  @Input() color1: string;
  @Input() list: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"#",
      date:"04 أبريل"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"#",
      date:"04 أبريل"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"#",
      date:"04 أبريل"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"#",
      date:"04 أبريل"

    }]
  constructor() { }

  ngOnInit() {
  }

}
