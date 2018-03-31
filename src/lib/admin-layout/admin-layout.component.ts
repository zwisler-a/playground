import { Component, OnInit } from "@angular/core";
import { sidenavAdnimations } from "./admin-layout.animations";
import { SideNavService } from "./services/side-nav.service";
import { LoadingBarService } from "./services/loading-bar.service";
import { HttpClient } from "@angular/common/http";
import { ObservableMedia } from "@angular/flex-layout";

/**
 * Navigation Layout for an Admin/Dashboard style page.
 * Navigation set via {@link NavigationService}
 * Toolbar is transcluded using the "toolbar" attribute
 * Has a integrated loading bar at the top listing to HttpClient calls
 * Can be configured using {@link LoadingBarService}
 * @example
 * <pg-admin-layout>
 *               <div toolbar>here could be the toolbar content</div>
 * </pg-admin-layout>
 */
@Component({
  selector: "pg-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
  animations: [sidenavAdnimations]
})
export class AdminLayoutComponent implements OnInit {
  /**
   * @ignore
   */
  constructor(
    private sideNavService: SideNavService,
    private client: HttpClient,
    private media: ObservableMedia,
    private loadingBarService: LoadingBarService
  ) {}

  ngOnInit() {}

  /**
   * @internal
   * Returns the Side-Nav state kept in {@link SideNavService}
   */
  get sideNavState() {
    return this.sideNavService.state;
  }

  /**
   * @internal
   * Returns the mode of the sidenav
   */
  get over() {
    return !this.media.isActive("gt-sm");
  }

  /**
   * Calls [SideNavService.toggleInContextWidth]{@link SideNavService#toggleInContextWidth}
   * Open and closes the SideNav according to the current state of the window
   */
  toggleSideNav() {
    this.sideNavService.toggleInContextWidth();
  }

  /**
   * @internal
   * return the loadingBarService
   */
  get loadingBar() {
    return this.loadingBarService;
  }
}
