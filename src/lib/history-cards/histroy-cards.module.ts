import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HistoryCardsComponent } from "./histroy-cards.component";

@NgModule({
  imports: [CommonModule, MatCardModule, FlexLayoutModule],
  declarations: [HistoryCardsComponent],
  exports: [HistoryCardsComponent, MatCardModule]
})
export class HistoryCardsModule {}
