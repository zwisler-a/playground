import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { carouselAnimations } from "./carousel.animation";
import { CarouselSlide } from "./carousel-slide.interface";

/**
 * An Image carousel.
 * Slides change until userinteraction according to @input changeInterval
 */
@Component({
  selector: "pg-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: carouselAnimations,
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  /**
   * Slides that should be inside the image carousel
   */
  @Input() public slides: CarouselSlide[] = [];
  /**
   * Invterval in ms in which the slides are supposed to change
   */
  @Input() private changeInterval = 15000;

  private currentImage = 0;

  private intervalId;

  /**
   * Emitted when a action button in the carousel is clicked
   * Contains the string in the action taken from the slide info
   */
  @Output() private action = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, this.changeInterval);
  }

  /**
   * Changes the carousel to the next image
   * @param stopInterval change should stop interval
   */
  nextImage(stopInterval?: boolean) {
    if (stopInterval) {
      clearInterval(this.intervalId);
    }
    if (this.currentImage < this.slides.length - 1) {
      this.currentImage++;
    }
  }

  /**
   * Changes the carousel to the prev. image
   * @param stopInterval change should stop interval
   */
  prevImage(stopInterval?: boolean) {
    if (stopInterval) {
      clearInterval(this.intervalId);
    }
    if (this.currentImage > 0) {
      this.currentImage--;
    }
  }

  /**
   * @internal
   */
  get hasNext() {
    return this.currentImage !== this.slides.length - 1;
  }

  /**
   * @internal
   */
  get hasPrevious() {
    return this.currentImage !== 0;
  }

  /**
   * @internal
   */
  actionClicked(text: string) {
    this.action.emit(text);
  }

  /**
   * @internal
   */
  getImageState(index: number) {
    if (index === this.currentImage) {
      return "center";
    } else if (index < this.currentImage) {
      return "left";
    } else if (index > this.currentImage) {
      return "right";
    }
  }

  /**
   * @internal
   */
  getTextState(index: number) {
    return index === this.currentImage ? "in" : "out";
  }
}
