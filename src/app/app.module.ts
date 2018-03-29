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
  WidgetBoardModule
} from "../lib";
import { CustomPageComponent } from "./custom-page/custom-page.component";
import { ListDetailViewComponent } from "./list-detail-view/list-detail-view.component";
import { CustomWidgetComponent } from "./custom-widget/custom-widget.component";
import { CarouselModule } from "../lib/carousel/carousel.module";
import { NavigationService as ListNavigationService } from "../lib/list-layout/navigation.service";
import { CustomCarouselComponent } from "./custom-carousel/custom-carousel.component";

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
    SplashscreenModule,
    WidgetBoardModule,
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
    private listNavigationService: ListNavigationService,
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
        name: "List1",
        icon: "menu",
        routerLink: false,
        path: "#section1-jp"
      },
      {
        name: "List2",
        icon: "dashboard",
        routerLink: false,
        path: "#section2-jp"
      },
      {
        name: "List3",
        icon: "lock",
        routerLink: false,
        path: "#section3-jp"
      },
      {
        name: "List4",
        icon: "account_circle",
        routerLink: false,
        path: "#section4-jp"
      },
      {
        name: "List5",
        icon: "menu",
        routerLink: false,
        path: "#section5-jp"
      },
      {
        name: "Menu",
        icon: "menu",
        routerLink: true,
        path: ""
      }
    ]);
    this.splash.hide();
  }
}
