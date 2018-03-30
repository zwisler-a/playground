import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListLayoutComponent } from "./list-layout.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { NavigationService } from "./services/navigation.service";
import { PageComponent } from "./page/page.component";
import { FancyButtonModule } from "../fancy-button/public.api";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatButtonModule,
    FancyButtonModule,
    MatIconModule
  ],
  providers: [NavigationService],
  declarations: [ListLayoutComponent, PageComponent],
  exports: [ListLayoutComponent, PageComponent]
})
export class ListLayoutModule {}
