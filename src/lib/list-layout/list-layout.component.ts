import { Component, OnInit, AfterViewInit } from "@angular/core";
import { navItemListState } from "./list.layout.animations";
import { ObservableMedia } from "@angular/flex-layout";
import { NavigationService } from "./navigation.service";
import { NavigationItem } from "./navigation.interface";
import { Router } from "@angular/router";

@Component({
  selector: "pg-list-layout",
  templateUrl: "./list-layout.component.html",
  styleUrls: ["./list-layout.component.scss"],
  animations: [navItemListState]
})
export class ListLayoutComponent implements OnInit, AfterViewInit {
  private isLoaded = false;
  openMenu = false;

  constructor(
    private media: ObservableMedia,
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    });
  }

  expandMenu() {
    this.openMenu = !this.openMenu;
  }

  closeMenu() {
    this.openMenu = false;
  }

  navigateTo(navItem: NavigationItem) {
    if (navItem.routerLink) {
      this.router.navigateByUrl(navItem.path);
    } else {
      const elem = document.querySelector(navItem.path);
      this.openMenu = false;
      if (elem) {
        elem.scrollIntoView();
      } else {
        throw new Error("Element does not exist!");
      }
    }
  }

  get navListHeight() {
    return this.media.isActive("gt-sm")
      ? 64
      : this.openMenu ? this.navigation.length * 50 : 0;
  }

  get opaque() {
    return (
      (window.scrollY > window.innerHeight || this.openMenu) && this.isLoaded
    );
  }

  get navigation() {
    return this.navigationService.navigation;
  }
}
