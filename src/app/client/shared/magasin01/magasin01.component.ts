import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-magasin01',
  templateUrl: './magasin01.component.html',
  styleUrls: ['./magasin01.component.css']
})
export class Magasin01Component implements OnInit {

  @Input() titremag: string;
  @Input() bgcolor1: string;
  @Input() lismagasin: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/275x200/0"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/275x200/400"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/275x200/800"

    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/275x200/1200"

    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
