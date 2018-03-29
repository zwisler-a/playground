import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselComponent } from "./carousel.component";
import { IsInViewModule } from "../is-in-view/is-in-view.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material";

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatIconModule, IsInViewModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent]
})
export class CarouselModule {}
