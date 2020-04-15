import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() title:string ;
  @Input() list: any[] = [
    {
      name: "سمير جواق",
      image: "..\\..\\assets\\img\\002.jpg",
      desc: "باحث جزائري، يعد في أطروحة دكتوراه في موضوع' أبعاد المواطنة في فكر يورغن هابرماس'. متخصص في فلسفة العلوم والقيم في الفلسفة الغربية المعاصرة.",
      link:"#"
    },
    {
      name: "سمير جواق",
      image: "..\\..\\assets\\img\\002.jpg",
      desc: "باحث جزائري، يعد في أطروحة دكتوراه في موضوع' أبعاد المواطنة في فكر يورغن هابرماس'. متخصص في فلسفة العلوم والقيم في الفلسفة الغربية المعاصرة.",
      link:"#"
    }
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
