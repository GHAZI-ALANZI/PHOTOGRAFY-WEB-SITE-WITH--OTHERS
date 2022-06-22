import { Component, OnInit } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { PixapiService } from '../pixapi.service';
import SwiperCore, { Swiper, Virtual, Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Thumbs, FreeMode, Manipulation } from 'swiper';
SwiperCore.use([Virtual, Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Thumbs, FreeMode, Manipulation ]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

  data: any = [];
  constructor(private api: PixapiService) {
    this.api.getData().subscribe(data => {
      this.data = data;
      // console.log(this.data.hits[0].webformatURL);
    })
  }

  ngOnInit(): void {
    setTimeout(function(){
      const swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
        breakpoints: {
            650: {
                slidesPerView: 5,
            },
        },
    });
  
    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            650: {
                slidesPerView: 2,
            },
        },
        thumbs: {
            swiper: swiper2,
        },
    });
    },100)
      
  
   
  }
}
