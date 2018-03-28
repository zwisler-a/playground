import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar.component';
import {MatButtonModule, MatIconModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SearchBarService} from "./search-bar.service";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [SearchBarService],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SearchBarModule {
}
