import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-slid',
  templateUrl: './widget-slid.component.html',
  styleUrls: ['./widget-slid.component.css']
})
export class WidgetSlidComponent implements OnInit {

  @Input() title1: string;
  @Input() color1: string;
  @Input() list: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/350x160/3498db",
      link:"#",
      date:"04 أبريل",
      cat:"تقارير",
      author:"إبراهيم غرايبة"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/350x160/3498db",
      link:"#",
      date:"04 أبريل",
      cat:"تقارير",
      author:"إبراهيم غرايبة"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/350x160/3498db",
      link:"#",
      date:"04 أبريل",
      cat:"تقارير",
      author:"إبراهيم غرايبة"
    }]
  constructor() { }

  ngOnInit() {
  }

}
