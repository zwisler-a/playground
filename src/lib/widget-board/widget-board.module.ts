import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WidgetBoardComponent} from "./widget-board.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatToolbarModule} from "@angular/material";
import {WidgetComponent} from "./widget/widget.component";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [WidgetBoardComponent, WidgetComponent],
  exports: [WidgetBoardComponent, WidgetComponent]
})
export class WidgetBoardModule {
}
