import {Component, OnInit} from '@angular/core';
import {sidenavAdnimations} from "./admin-layout.animations";
import {SideNavService} from "./services/side-nav.service";
import {LoadingBarService} from "./services/loading-bar.service";
import {HttpClient} from "@angular/common/http";

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
