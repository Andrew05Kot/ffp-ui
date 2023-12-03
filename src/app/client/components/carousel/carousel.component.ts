import { Component, Input, OnInit } from '@angular/core';
import { SlideModel } from '@app/client/components/carousel/slide-model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() maxWidth: string;
  @Input() height: string;

  _slides: SlideModel[];
  @Input() set slides(value: SlideModel[]) {
    this._slides = value;
  }

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.next()
    }, 5000);
  }

  slideStyles(): { [key: string]: string } {
    return {
      'transform': `translateX(-${this.currentIndex * 100}%)`
    };
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this._slides.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this._slides.length) % this._slides.length;
  }

}
