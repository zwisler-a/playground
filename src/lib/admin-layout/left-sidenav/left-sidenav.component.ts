import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {sidenavAdnimations, toggleButtonAnimations} from "../admin-layout.animations";
import {NavigationModelItem} from "../services/navigation-model.interface";
import {NavigationService} from "../services/navigation.service";
import {SideNavService} from "../services/side-nav.service";

/**
 * @internal
 * Displays the navigation for the admin layout
 */
@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss'],
  animations: [sidenavAdnimations, toggleButtonAnimations]
})
export class LeftSidenavComponent implements OnInit, OnDestroy {

  public navigation: NavigationModelItem[];

  private navModelChangeSub: Subscription;

  constructor(private navigationService: NavigationService,
              private sideNavService: SideNavService) {
  }

  expansionToggle() {
    this.sideNavService.toggleInContextWidth();
  }

  get sideNavState() {
    return this.sideNavService.state;
  }

  /**
   * @ignore
   */
  ngOnInit() {

    this.navigation = this.navigationService.model;
    this.navModelChangeSub = this.navigationService.onNavigationModelChanged.subscribe((model) => {
      this.navigation = model;
    });

  }
 /**
  * @ignore
  */
  ngOnDestroy(): void {
    this.navModelChangeSub.unsubscribe();
  }

}
