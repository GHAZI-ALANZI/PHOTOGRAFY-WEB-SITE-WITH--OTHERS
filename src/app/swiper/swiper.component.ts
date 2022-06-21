import { Component, OnInit } from '@angular/core';
import { PixapiService } from '../pixapi.service';

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
  }
}
