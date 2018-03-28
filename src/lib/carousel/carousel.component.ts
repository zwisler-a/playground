import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {carouselAnimations} from './carousel.animation';
import {CarouselSlide} from "./image-carousel-slide.interface";


@Component({
  selector: 'pg-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: carouselAnimations
})
export class CarouselComponent implements OnInit {

  @Input()
  public slides: CarouselSlide[] = [];
  @Input()
  private changeInterval = 15000;

  private currentImage = 0;


  private intervalId;

  @Output()
  private onAction = new EventEmitter<string>();


  constructor() {

  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, this.changeInterval);
  }


  nextImage(stopInterval?: boolean) {
    if (stopInterval) clearInterval(this.intervalId);
    if (this.currentImage < this.slides.length - 1) {
      this.currentImage++;
    }
  }

  prevImage(stopInterval?: boolean) {
    if (stopInterval) clearInterval(this.intervalId);
    if (this.currentImage > 0) {
      this.currentImage--;
    }
  }

  get hasNext() {
    return this.currentImage !== this.slides.length - 1;
  }

  get hasPrevious() {
    return this.currentImage !== 0;
  }

  action(text: string) {
    this.onAction.emit(text);
  }

  getImageState(index: number) {
    if (index === this.currentImage) {
      return 'center';
    } else if (index < this.currentImage) {
      return 'left';
    } else if (index > this.currentImage) {
      return 'right';
    }
  }

  getTextState(index: number) {
    return index === this.currentImage ? 'in' : 'out';
  }

}
