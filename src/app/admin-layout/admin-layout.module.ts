import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from "./admin-layout.component";
import {LeftSidenavComponent} from "./left-sidenav/left-sidenav.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminLayoutComponent,
    LeftSidenavComponent
  ],
  exports: {
    AdminLayoutComponent
  }
})
export class AdminLayoutModule {
}
