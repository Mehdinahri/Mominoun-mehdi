import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget-media-img',
  templateUrl: './widget-media-img.component.html',
  styleUrls: ['./widget-media-img.component.css']
})
export class WidgetMediaImgComponent implements OnInit {

  @Input() title1: string;
  @Input() color1: string;
  @Input() list: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"#"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"#"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"#"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"#"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"#"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"#"
    }]
  constructor() { }

  ngOnInit() {
  }

}
