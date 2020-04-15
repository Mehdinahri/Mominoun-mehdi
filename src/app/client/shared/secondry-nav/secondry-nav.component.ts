import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondry-nav',
  templateUrl: './secondry-nav.component.html',
  styleUrls: ['./secondry-nav.component.css']
})
export class SecondryNavComponent implements OnInit {

  @Input() listnews: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      link:"wwww.google.com"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      link:"wwww.google.com"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      link:"wwww.google.com"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      link:"wwww.google.com"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      link:"wwww.google.com"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      link:"wwww.google.com"

    }]
  constructor() { }

  ngOnInit() {
  }

}
