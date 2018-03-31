import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule
} from "@angular/material";
import { BookmarkComponent } from "./bookmark.component";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/**
 * Simple bookmark component to save custom routes on the page
 */
@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [BookmarkComponent],
  exports: [BookmarkComponent]
})
export class BookmarkModule {}
