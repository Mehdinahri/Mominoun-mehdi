import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event02',
  templateUrl: './event02.component.html',
  styleUrls: ['./event02.component.css']
})
export class Event02Component implements OnInit {

  @Input() title01: string;
  @Input() bgcolor1: string;
  @Input() listartl: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100",
      date: "Oct 2, 2016"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100",
      date: "Oct 2, 2016"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100",
      date: "Oct 2, 2016"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100",
      date: "Oct 2, 2016"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100",
      date: "Oct 2, 2016"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100",
      date: "Oct 2, 2016"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100",
      date: "Oct 2, 2016"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100",
      date: "Oct 2, 2016"

    }]
  constructor() { }

  ngOnInit() {
  }

}
