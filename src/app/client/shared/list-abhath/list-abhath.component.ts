import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-abhath',
  templateUrl: './list-abhath.component.html',
  styleUrls: ['./list-abhath.component.css']
})
export class ListAbhathComponent implements OnInit {

  @Input() title02: string;
  @Input() bgcolor1: string;
  @Input() paginate: boolean;
  itemsPerPage: number = 8;
  page: number = 1;
  items_count: number = 0;
  @Input() listarticle: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/349x197/ddd",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
    }
  ]
  constructor() { }

  ngOnInit() {
    this.items_count = this.listarticle.length;
  }
  getPage($event) {
    console.log($event)
  }

}
