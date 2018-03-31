import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Bookmark } from "./bookmark.interface";

/**
 * Simple component to remember a certain page
 * Stores the bookmarks in the localstorage
 * TODO: Remove bookmarks
 */
@Component({
  selector: "pg-bookmarks",
  templateUrl: "./bookmark.component.html",
  styleUrls: ["./bookmark.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BookmarkComponent implements OnInit {
  private readonly BOOKMARK_LS_KEY = "pgBookmarks";

  bookmarks: Bookmark[];

  /**
   * @ignore
   * @param router
   */
  constructor(private router: Router) {}

  ngOnInit() {
    this.getCurrentBookmarks();
  }

  private getCurrentBookmarks() {
    try {
      this.bookmarks =
        JSON.parse(localStorage.getItem(this.BOOKMARK_LS_KEY)) || [];
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Navigates to a page given the url
   * @param url Page url
   */
  navigateTo(url) {
    this.router.navigateByUrl(url);
  }

  /**
   * Adds a bookmark for the current page
   * @param name Name of the Bookmark
   */
  public addCurrent(name: string) {
    this.bookmarks.push({
      name: name,
      path: this.router.url
    });
    this.saveBookmarks();
  }

  private saveBookmarks() {
    localStorage.setItem(this.BOOKMARK_LS_KEY, JSON.stringify(this.bookmarks));
  }
}
