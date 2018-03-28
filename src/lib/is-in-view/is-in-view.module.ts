import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IsInViewDirective} from "./is-in-view.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IsInViewDirective
  ],
  exports: [IsInViewDirective]
})
export class IsInViewModule {
}
