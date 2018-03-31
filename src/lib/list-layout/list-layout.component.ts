import { Component, OnInit, AfterViewInit, ViewEncapsulation } from "@angular/core";
import { navItemListState } from "./list.layout.animations";
import { ObservableMedia } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { ListNavigationService } from "./services/list-navigation.service";
import { NavigationItem } from "./services/navigation.interface";

/**
 * A scroll down Layout
 * Provides a navigation on the top of the page (position fixed)
 */
@Component({
  selector: "pg-list-layout",
  templateUrl: "./list-layout.component.html",
  styleUrls: ["./list-layout.component.scss"],
  animations: [navItemListState],
  encapsulation: ViewEncapsulation.None
})
export class ListLayoutComponent implements OnInit, AfterViewInit {
  // used to avoid value has changed error
  private isLoaded = false;

  /**
   * Used to determine if the menu is open or not if its small enough to be drop down
   */
  openMenu = false;

  /**
   * @ignore
   */
  constructor(
    private media: ObservableMedia,
    private navigationService: ListNavigationService,
    private router: Router
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    });
  }

  /**
   * TODO rename
   * Toggles the menu
   */
  expandMenu() {
    this.openMenu = !this.openMenu;
  }

  /**
   * Closes the menu
   */
  closeMenu() {
    this.openMenu = false;
  }

  /**
   * Navigates to a selected menu item
   * Determines if it should scroll to it or use the router by testing for the `routerLink`
   * attribute on the Navigation item
   */
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

  /**
   * Litte scroll helper
   * @param element Element to scroll to
   */
  private scrollTo(element) {
    window.scrollBy({
      top: element.getBoundingClientRect().top - 64,
      left: 0,
      behavior: "smooth"
    });
  }

  /** @internal */
  get navListHeight() {
    return this.media.isActive("gt-sm")
      ? 64
      : this.openMenu ? this.navigation.length * 50 : 0;
  }

  /** @internal */
  get opaque() {
    return (
      (window.scrollY > window.innerHeight - 66 || this.openMenu) &&
      this.isLoaded
    );
  }
  /** @internal */
  get navigation() {
    return this.navigationService.navigation;
  }
}
