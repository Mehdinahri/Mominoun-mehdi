import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjamatlist',
  templateUrl: './tarjamatlist.component.html',
  styleUrls: ['./tarjamatlist.component.css']
})
export class TarjamatlistComponent implements OnInit {

  @Input() titre: string;
  @Input() paginate: boolean;
  itemsPerPage: number = 12;
  page: number = 1;
  items_count: number = 0;
  @Input() listarticle: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600"
    }]
  constructor() { }

  ngOnInit() {
  this.items_count = this.listarticle.length;
  }
  getPage($event) {
    console.log($event)
  }

}
