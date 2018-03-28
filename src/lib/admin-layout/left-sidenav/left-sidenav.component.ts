import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {sidenavAdnimations, toggleButtonAnimations} from "../admin-layout.animations";
import {NavigationModelItem, NavigationService, SideNavService} from "../../";

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

  ngOnInit() {

    this.navigation = this.navigationService.model;
    this.navModelChangeSub = this.navigationService.onNavigationModelChanged.subscribe((model) => {
      this.navigation = model;
    })

  }

  ngOnDestroy(): void {
    this.navModelChangeSub.unsubscribe();
  }

}
