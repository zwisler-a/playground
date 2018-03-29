import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListLayoutComponent } from "./list-layout.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { NavigationService } from "./navigation.service";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [NavigationService],
  declarations: [ListLayoutComponent],
  exports: [ListLayoutComponent]
})
export class ListLayoutModule {}
