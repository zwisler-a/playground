import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { ObservableMedia } from "@angular/flex-layout";

/**
 * A component with a list detail view orientation
 * Sould be operated using the RouterModule
 * ```html
 * <pg-list-detail-view [list]="<!-- items to be displayed in the list -->">
 *   <div left-toolbar><!-- toolbar content above the list--></div>
 *   <ng-template #listContentTemplate let-item>
 *     <!-- list item template. exapmle here -->
 *    <div class="example list item" [routerLink]="['/detail',item.id]">{{item.name}}</div>
 *   </ng-template>
 *   <div right-toolbar><!-- toolbar content above the detail view --></div>
 * </pg-list-detail-view>
 * ```
 */
@Component({
  selector: "pg-list-detail-view",
  templateUrl: "./list-detail-view.component.html",
  styleUrls: ["./list-detail-view.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ListDetailViewComponent implements OnInit {
  @ContentChild("listContentTemplate") lcTemplate: TemplateRef<any>;

  @ViewChild("sideNav") public sideNav;

  /**
   * Items repeated in 'listContentTemplate'
   */
  @Input() list: any[];

  /**
   * Default width of the list sidenav
   */
  @Input() sideNavWidth = 250;

  /**
   * @ignore
   */
  constructor(private media: ObservableMedia) {}

  ngOnInit() {}

  /**
   * @internal
   * Greater than md
   */
  get gtMd() {
    return this.media.isActive("lg") || this.media.isActive("xl");
  }
}
