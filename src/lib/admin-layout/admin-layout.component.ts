import {Component, OnInit} from '@angular/core';
import {sidenavAdnimations} from "./admin-layout.animations";
import {SideNavService} from "./services/side-nav.service";
import {LoadingBarService} from "./services/loading-bar.service";
import {HttpClient} from "@angular/common/http";

/**
 * Navigation Layout for an Admin/Dashboard sryle page.
 * Navigation set via NavigationService
 * Toolbar is transcluded using the "toolbar" attribute
 * Has a integrated loading bar at the top listing to HttpClient calls
 * Can be configured using LoadingBarService
 */
@Component({
  selector: 'pg-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  animations: [sidenavAdnimations]
})
export class AdminLayoutComponent implements OnInit {

  constructor(private sideNavService: SideNavService,
              private client: HttpClient,
              private loadingBarService: LoadingBarService) {
  }

  ngOnInit() {
  }

  get sideNavState() {
    return this.sideNavService.state;
  }

  toggleSideNav() {
    this.sideNavService.toggleInContextWidth();
  }

  get loadingBar() {
    return this.loadingBarService;
  }

}
