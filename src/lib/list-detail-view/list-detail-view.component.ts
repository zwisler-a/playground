import {Component, ContentChild, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ObservableMedia} from "@angular/flex-layout";

@Component({
  selector: 'pg-list-detail-view',
  templateUrl: './list-detail-view.component.html',
  styleUrls: ['./list-detail-view.component.scss']
})
export class ListDetailViewComponent implements OnInit {

  @ContentChild('listContentTemplate') lcTemplate: TemplateRef<any>;

  @ViewChild('sideNav')
  public sideNav;

  /**
   * Items repeated in 'listContentTemplate'
   */
  @Input()
  list: any[];

  /**
   * Default width of the list sidenav
   */
  @Input()
  sideNavWidth = 250;

  constructor(private media: ObservableMedia) {
  }

  ngOnInit() {
  }

  /**
   * Greater than md
   */
  get gtMd() {
    return this.media.isActive('lg') || this.media.isActive('xl');
  }

}
