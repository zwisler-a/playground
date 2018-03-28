import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CenteredPageComponent} from "./centered-page.component";
import {MatCardModule, MatToolbarModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  declarations: [CenteredPageComponent],
  exports: [CenteredPageComponent]
})
export class CenteredPageModule {
}
