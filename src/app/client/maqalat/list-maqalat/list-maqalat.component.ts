import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-maqalat',
  templateUrl: './list-maqalat.component.html',
  styleUrls: ['./list-maqalat.component.css']
})
export class ListMaqalatComponent implements OnInit {
@Input() title01:string;
@Input() paginate: boolean;
  itemsPerPage: number = 12;
  page: number = 1;
  items_count: number = 0;
  @Input() listarticle: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\'assets\'img\'002.jpg"
    },{
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "http://via.placeholder.com/318x212/1600",
      description: " لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور... ",
      author:"اسم المؤلف",
      date:"Oct 2, 2016 ",
      imgAuthor:"..\..\'assets\'img\'002.jpg"
    }]
  constructor() { }

  ngOnInit() {
    this.items_count = this.listarticle.length;
  }
  getPage($event) {
    console.log($event)
  }

}
