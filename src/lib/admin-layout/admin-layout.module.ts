import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './admin-layout.component';
import {LeftSidenavComponent} from './left-sidenav/left-sidenav.component';
import {NavigationService} from './services/navigation.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule, MatIconModule, MatProgressBarModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SideNavService} from "./services/side-nav.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoadingBarInterceptor} from "./services/loading-bar.interceptor";
import {LoadingBarService} from "./services/loading-bar.service";

/**
 * The module containing the admin-layout
 * Registers a HttpClient interceptor for the loadingbar {@link LoadingBarService}
 */
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    // Material Modules
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule
  ],
  declarations: [
    AdminLayoutComponent,
    LeftSidenavComponent
  ],
  providers: [
    NavigationService,
    SideNavService,
    LoadingBarService,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingBarInterceptor, multi: true}
  ],
  exports: [
    AdminLayoutComponent
  ]
})
export class AdminLayoutModule {
}
