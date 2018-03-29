import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListDetailViewComponent} from "./list-detail-view.component";
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule
  ],
  declarations: [ListDetailViewComponent],
  exports: [ListDetailViewComponent]
})
export class ListDetailViewModule {
}
