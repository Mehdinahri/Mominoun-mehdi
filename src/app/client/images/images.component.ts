import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'hammerjs';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {

        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Rotate,
                previewCloseOnEsc:true,
                imageSwipe: true,
                imageAutoPlay: true,
                imageAutoPlayInterval:5000,
                imageAutoPlayPauseOnHover:true 
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];

        this.galleryImages = [
            {
                small: 'http://via.placeholder.com/318x212/1600',
                medium: 'http://via.placeholder.com/318x212/1600',
                big: 'http://via.placeholder.com/318x212/1600'
            },{
              small: 'http://via.placeholder.com/318x212/0000FF/808080 ?Text=Digital.com',
              medium: 'http://via.placeholder.com/318x212/0000FF/808080 ?Text=Digital.com',
              big: 'http://via.placeholder.com/318x212/0000FF/808080 ?Text=Digital.com'
          },{
            small: 'http://via.placeholder.com/318x212/ff0000/FFFFFF?Text=Down.com',
            medium: 'http://via.placeholder.com/318x212/ff0000/FFFFFF?Text=Down.com',
            big: 'http://via.placeholder.com/318x212/ff0000/FFFFFF?Text=Down.com'
        },
            {
              small: 'http://via.placeholder.com/318x212/ffff00/000000?Text=WebsiteBuilders.com',
              medium: 'http://via.placeholder.com/318x212/ffff00/000000?Text=WebsiteBuilders.com',
              big: 'http://via.placeholder.com/318x212/ffff00/000000?Text=WebsiteBuilders.com'
          },
          {
            small: 'http://via.placeholder.com/318x212/1600',
            medium: 'http://via.placeholder.com/318x212/1600',
            big: 'http://via.placeholder.com/318x212/1600'
        },
        {
          small: 'http://via.placeholder.com/318x212/1600',
          medium: 'http://via.placeholder.com/318x212/1600',
          big: 'http://via.placeholder.com/318x212/1600'
      }
        ];
    }

}
