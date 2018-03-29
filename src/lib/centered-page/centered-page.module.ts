import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CenteredPageComponent } from "./centered-page.component";
import { MatCardModule, MatToolbarModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  declarations: [CenteredPageComponent],
  exports: [CenteredPageComponent]
})
export class CenteredPageModule {}
