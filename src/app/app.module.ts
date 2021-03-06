import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from "@angular/material";
import {
  AdminLayoutModule,
  BookmarkModule,
  CenteredPageModule,
  ListDetailViewModule,
  ListLayoutModule,
  NavigationService,
  SearchBarModule,
  SplashscreenModule,
  SplashscreenService,
  WidgetBoardModule,
  ListLayoutNavigationService,
  HistoryCardsModule
} from "../lib";
import { CustomPageComponent } from "./custom-page/custom-page.component";
import { ListDetailViewComponent } from "./list-detail-view/list-detail-view.component";
import { CustomWidgetComponent } from "./custom-widget/custom-widget.component";
import { CarouselModule } from "../lib/carousel/carousel.module";
import { CustomCarouselComponent } from "./custom-carousel/custom-carousel.component";
import { FancyButtonModule } from "../lib/fancy-button/fancy-button.module";

@NgModule({
  declarations: [
    AppComponent,
    CustomWidgetComponent,
    CustomPageComponent,
    ListDetailViewComponent,
    CustomCarouselComponent
  ],
  imports: [
    AdminLayoutModule,
    CenteredPageModule,
    BookmarkModule,
    SearchBarModule,
    HistoryCardsModule,
    SplashscreenModule,
    WidgetBoardModule,
    FancyButtonModule,
    ListLayoutModule,
    CarouselModule,
    ListDetailViewModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private navigationService: NavigationService,
    private listNavigationService: ListLayoutNavigationService,
    private splash: SplashscreenService
  ) {
    this.navigationService.setModel([
      {
        name: "Bsp. Page",
        path: "",
        icon: "menu"
      },
      {
        name: "Grid",
        path: "/grid",
        icon: "menu"
      },
      {
        name: "Carousel",
        path: "/carousel",
        icon: "menu"
      },
      {
        name: "List",
        path: "/list",
        icon: "menu"
      }
    ]);
    this.listNavigationService.setModel([
      {
        name: "Menu",
        icon: "menu",
        routerLink: true,
        path: "/"
      }
    ]);
    this.splash.hide();
  }
}
