import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article01',
  templateUrl: './article01.component.html',
  styleUrls: ['./article01.component.css']
})
export class Article01Component implements OnInit {

  @Input() title01: string;
  @Input() paginate: boolean;
  @Input() list: any[] = [
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple 1",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author",
      description: "tes desc",

    },
    {
      title: "exemple 2",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
    {
      title: "exemple21",
      image: "https://i.picsum.photos/id/317/300/300.jpg",
      author: "test author2",
      description: "tes desc",

    },
  ];
  itemsPerPage: number = 8;
page: number = 1;
items_count: number = 0;

  constructor() { }

  ngOnInit() {
    this.items_count = this.list.length;
  }

  getPage($event) {
    console.log($event)
  }

}
