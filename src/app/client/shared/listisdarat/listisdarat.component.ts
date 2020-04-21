import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listisdarat',
  templateUrl: './listisdarat.component.html',
  styleUrls: ['./listisdarat.component.css']
})
export class ListisdaratComponent implements OnInit {

  @Input() titrebook: string;
  @Input() list: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"اسم المؤلف",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"اسم المؤلف",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"اسم المؤلف",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"اسم المؤلف",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"اسم المؤلف",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      link:"اسم المؤلف",
    }]
  constructor() { }

  ngOnInit() {
  }

}
