import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplashscreenService} from "./splashscreen.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [SplashscreenService],
  declarations: []
})
export class SplashscreenModule {
}
