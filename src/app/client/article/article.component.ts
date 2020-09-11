import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() list: any[] = [
    {
      title: "عنوان المقال: الموقع الجديد مؤمنون بلا حدود",
      image: "https://via.placeholder.com/610x342/ddd",
      post: "وجاء حديث أردوغان عبر دائرة تلفزيونية مغلقة خلال مشاركته في قمة \"للمجلس التركي\" للدول الناطقة بالتركية، الذي تأسس في 3 أكتوبر/تشرين الأول 2009، ويضم تركيا وأذربيجان وكزاخستان وقرغيزيا وأوزبكستان.\nوجاء حديث أردوغان عبر دائرة تلفزيونية مغلقة خلال مشاركته في قمة \"للمجلس التركي\" للدول الناطقة بالتركية، الذي تأسس في 3 أكتوبر/تشرين الأول 2009، ويضم تركيا وأذربيجان وكزاخستان وقرغيزيا وأوزبكستان.\nوجاء حديث أردوغان عبر دائرة تلفزيونية مغلقة خلال مشاركته في قمة \"للمجلس التركي\" للدول الناطقة بالتركية، الذي تأسس في 3 أكتوبر/تشرين الأول 2009، ويضم تركيا وأذربيجان وكزاخستان وقرغيزيا وأوزبكستان.",
      cat: "مقال",
      subcat: "دراسات دينية",
      date:"08 يناير 2020",
      author:"سمير جواق"
    }]
  constructor() { }

  ngOnInit() {
  }

}