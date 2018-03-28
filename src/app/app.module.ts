import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule, MatIconModule, MatToolbarModule} from "@angular/material";
import {
  AdminLayoutModule, BookmarkModule, CenteredPageModule, ListDetailViewModule, NavigationService, SearchBarModule,
  SplashscreenModule,
  SplashscreenService, WidgetBoardModule
} from "../lib";
import {CustomPageComponent} from './custom-page/custom-page.component';
import {ListDetailViewComponent} from './list-detail-view/list-detail-view.component';
import { CustomWidgetComponent } from './custom-widget/custom-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomWidgetComponent,
    CustomPageComponent,
    ListDetailViewComponent
  ],
  imports: [
    AdminLayoutModule,
    CenteredPageModule,
    BookmarkModule,
    SearchBarModule,
    SplashscreenModule,
    WidgetBoardModule,
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
  constructor(private navigationService: NavigationService,
              private splash: SplashscreenService) {
    this
      .navigationService
      .setModel([
        {
          name: 'Dashboard',
          path: '',
          icon: 'menu'
        }, {
          name: 'Grid',
          path: '/grid',
          icon: 'menu'
        }
      ]);

    this.splash.hide();
  }
}
