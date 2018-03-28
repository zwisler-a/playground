import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from "./carousel.component";
import {IsInViewModule} from "../is-in-view/is-in-view.module";

@NgModule({
  imports: [
    CommonModule,
    IsInViewModule
  ],
  declarations: [
    CarouselComponent
  ],
  exports: [CarouselComponent]
})
export class CarouselModule {
}
