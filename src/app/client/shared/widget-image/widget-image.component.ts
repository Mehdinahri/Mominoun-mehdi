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
      image: "https://www.hafryat.com/sites/default/files/styles/resize_555_x_374/public/image_4_5.png",
      link:"#"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://www.hafryat.com/sites/default/files/styles/resize_555_x_374/public/image_4_5.png",
      link:"#"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://www.hafryat.com/sites/default/files/styles/resize_555_x_374/public/image_4_5.png",
      link:"#"
    }]
  constructor() { }

  ngOnInit() {
  }

}
