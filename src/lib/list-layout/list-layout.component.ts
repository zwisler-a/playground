import { Component, OnInit, AfterViewInit } from "@angular/core";
import { navItemListState } from "./list.layout.animations";
import { ObservableMedia } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { NavigationService } from "./services/navigation.service";
import { NavigationItem } from "./services/navigation.interface";

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
    if (navItem.routerLink && typeof navItem.path === "string") {
      this.router.navigateByUrl(navItem.path);
    } else {
      this.navigation.forEach(item => {
        item.isActive = false;
      });
      navItem.isActive = true;
      this.openMenu = false;
      if (navItem.path && navItem.path instanceof HTMLElement) {
        this.scrollTo(navItem.path);
      } else {
        throw new Error("Element does not exist!");
      }
    }
  }

  scrollTo(element) {
    window.scrollBy({
      top: element.getBoundingClientRect().top - 64,
      left: 0,
      behavior: "smooth"
    });
  }

  get navListHeight() {
    return this.media.isActive("gt-sm")
      ? 64
      : this.openMenu ? this.navigation.length * 50 : 0;
  }

  get opaque() {
    return (
      (window.scrollY > window.innerHeight - 66 || this.openMenu) && this.isLoaded
    );
  }

  get navigation() {
    return this.navigationService.navigation;
  }
}
