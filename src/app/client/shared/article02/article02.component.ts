import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article02',
  templateUrl: './article02.component.html',
  styleUrls: ['./article02.component.css']
})
export class Article02Component implements OnInit {

  @Input() titrecat: string;
  @Input() list1: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/275x200/ddd",
      author: "أنس بومدين",
      date: "Oct 6, 2016",

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/275x200/ddd",
      author: "أنس بومدين",
      date: "Oct 6, 2016",

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/275x200/ddd",
      author: "أنس بومدين",
      date: "Oct 6, 2016",

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/275x200/ddd",
      author: "أنس بومدين",
      date: "Oct 6, 2016",

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/275x200/ddd",
      author: "أنس بومدين",
      date: "Oct 6, 2016",

    }]
    @Input() list2: any[] = [
      {
        title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
        image: "https://via.placeholder.com/275x200/ddd",
        author: "أنس بومدين",
        date: "Oct 6, 2016",
  
      },{
        title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
        image: "https://via.placeholder.com/275x200/ddd",
        author: "أنس بومدين",
        date: "Oct 6, 2016",
  
      },{
        title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
        image: "https://via.placeholder.com/275x200/ddd",
        author: "أنس بومدين",
        date: "Oct 6, 2016",
  
      },{
        title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
        image: "https://via.placeholder.com/275x200/ddd",
        author: "أنس بومدين",
        date: "Oct 6, 2016",
  
      },{
        title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
        image: "https://via.placeholder.com/275x200/ddd",
        author: "أنس بومدين",
        date: "Oct 6, 2016",
  
      }]
  constructor() { }

  ngOnInit() {
  }

}
