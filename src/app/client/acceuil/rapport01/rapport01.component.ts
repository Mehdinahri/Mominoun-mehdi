import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rapport01',
  templateUrl: './rapport01.component.html',
  styleUrls: ['./rapport01.component.css']
})
export class Rapport01Component implements OnInit {

  @Input() title:string;
  @Input() listartl: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      date: "Oct 2, 2016",
      desc:"بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...",
      author:"أنس بومدين"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      date: "Oct 2, 2016",
      desc:"بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...",
      author:"أنس بومدين"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      date: "Oct 2, 2016",
      desc:"بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...",
      author:"أنس بومدين"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      date: "Oct 2, 2016",
      desc:"بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...",
      author:"أنس بومدين"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      date: "Oct 2, 2016",
      desc:"بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...",
      author:"أنس بومدين"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      date: "Oct 2, 2016",
      desc:"بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...",
      author:"أنس بومدين"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      date: "Oct 2, 2016",
      desc:"بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...",
      author:"أنس بومدين"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      date: "Oct 2, 2016",
      desc:"بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...",
      author:"أنس بومدين"
    }]
  constructor() { }

  ngOnInit() {
  }

}
