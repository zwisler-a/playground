import {Component, OnInit} from '@angular/core';
import {navItemListState} from "./list.layout.animations";
import {ObservableMedia} from "@angular/flex-layout";

@Component({
  selector: 'pg-list-layout',
  templateUrl: './list-layout.component.html',
  styleUrls: ['./list-layout.component.scss'],
  animations: [navItemListState]
})
export class ListLayoutComponent implements OnInit {

  openMenu = false;

  constructor(private media: ObservableMedia) {
  }


  ngOnInit() {
  }

  expandMenu() {
    this.openMenu = !this.openMenu;
  }

  closeMenu() {
    this.openMenu = false;
  }

  get navItemListState() {
    return this.media.isActive('gt-sm') || this.openMenu ? 'visible' : 'hidden';
  }

  get navColorOverwrite() {
    return window.scrollY < window.innerHeight;
  }

}
