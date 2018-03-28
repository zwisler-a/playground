import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListLayoutComponent} from "./list-layout.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {MatButtonModule, MatIconModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ListLayoutComponent],
  exports: [ListLayoutComponent]
})
export class ListLayoutModule {
}
