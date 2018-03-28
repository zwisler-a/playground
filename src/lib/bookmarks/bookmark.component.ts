import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Bookmark} from "./bookmark.interface";

@Component({
  selector: 'pg-bookmarks',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  readonly BOOKMARK_LS_KEY = "pgBookmarks";

  bookmarks: Bookmark[];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.getCurrentBookmarks();
  }


  getCurrentBookmarks() {
    try {
      this.bookmarks = JSON.parse(localStorage.getItem(this.BOOKMARK_LS_KEY)) || [];
    } catch (e) {
      console.error(e);
    }
  }

  navigateTo(url) {
    this.router.navigateByUrl(url);
  }


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
