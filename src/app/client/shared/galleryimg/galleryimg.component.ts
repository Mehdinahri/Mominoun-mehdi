import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galleryimg',
  templateUrl: './galleryimg.component.html',
  styleUrls: ['./galleryimg.component.css']
})
export class GalleryimgComponent implements OnInit {

  @Input() title:string;
  @Input() lisimg: any[] = [
    {
      title:"مومنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100"
    },{
      title:"مومنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100"
    },{
      title:"مومنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100"
    },{
      title:"مومنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100"
    },{
      title:"مومنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100"
    },{
      title:"مومنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100"
    },{
      title:"مومنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100"
    },{
      title:"مومنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100"
    },{
      title:"مومنون بلا حدود",
      image: "https://via.placeholder.com/220x150/100"
    }]
  constructor() { }

  ngOnInit() {
  }

}
