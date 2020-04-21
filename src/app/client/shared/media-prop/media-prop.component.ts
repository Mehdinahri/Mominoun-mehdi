import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-prop',
  templateUrl: './media-prop.component.html',
  styleUrls: ['./media-prop.component.css']
})
export class MediaPropComponent implements OnInit {

  @Input() title:string;
  @Input() list: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      link:"#"
    },
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      link:"#"
    },
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      link:"#"
    },]
  constructor() { }

  ngOnInit() {
  }

}
