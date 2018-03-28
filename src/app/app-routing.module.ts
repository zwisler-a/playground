import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent, WidgetBoardComponent} from "../lib";
import {CustomPageComponent} from "./custom-page/custom-page.component";
import {ListDetailViewComponent} from "./list-detail-view/list-detail-view.component";
import {CustomWidgetComponent} from "./custom-widget/custom-widget.component";
import {CustomCarouselComponent} from "./custom-carousel/custom-carousel.component";

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      component: CustomPageComponent,
      children: [{
        path: '',
        component: CustomWidgetComponent,
      }, {
        path: 'detail/:itemId',
        component: ListDetailViewComponent
      }]
    }, {
      path: 'grid',
      component: WidgetBoardComponent
    }, {
      path: 'carousel',
      component: CustomCarouselComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
