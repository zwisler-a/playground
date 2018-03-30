import { NgModule } from "@angular/core";

import { FancyButtonComponent } from "./fancy-button.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [FancyButtonComponent],
  exports: [FancyButtonComponent]
})
export class FancyButtonModule {}
