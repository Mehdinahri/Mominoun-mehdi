import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() name:string;
  @Input() list: any[] = [
    {
      name: "سمير جواق",
      image: "..\\..\\assets\\img\\002.jpg",
      desc: "باحث جزائري، يعد في أطروحة دكتوراه في موضوع' أبعاد المواطنة في فكر يورغن هابرماس'. متخصص في فلسفة العلوم والقيم في الفلسفة الغربية المعاصرة."
    }
  ]
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
