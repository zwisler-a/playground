import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatMenuModule
} from "@angular/material";
import {BookmarkComponent} from "./bookmark.component";

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  declarations: [BookmarkComponent],
  exports: [BookmarkComponent]
})
export class BookmarkModule {
}
