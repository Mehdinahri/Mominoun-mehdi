import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-prop',
  templateUrl: './news-prop.component.html',
  styleUrls: ['./news-prop.component.css']
})
export class NewsPropComponent implements OnInit {

  @Input() title:string;
  @Input() list: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      link:"#",
      date:"يناير 02 2020",
      author:"مهدي نهري",
      cat:"ترجمة"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      link:"#",
      date:"يناير 02 2020",
      author:"مهدي نهري",
      cat:"ترجمة"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      link:"#",
      date:"يناير 02 2020",
      author:"مهدي نهري",
      cat:"ترجمة"
    }]
  constructor() { }

  ngOnInit() {
  }

}
