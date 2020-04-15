import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  @Input() title1: string;
  @Input() color1: string;
  @Input() list: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://www.mominoun.com/images/tatbikat.jpg",
      link:"#"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://www.mominoun.com/images/ab11.jpg",
      link:"#"
    }]
  constructor() { }

  ngOnInit() {
  }

}
