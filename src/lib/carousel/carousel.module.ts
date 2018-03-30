import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselComponent } from "./carousel.component";
import { IsInViewModule } from "../is-in-view/is-in-view.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FancyButtonModule } from "../fancy-button/public.api";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    IsInViewModule,
    BrowserAnimationsModule,
    FancyButtonModule
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent]
})
export class CarouselModule {}
