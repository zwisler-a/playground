import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

/**
 * Custom styled button - similar to all the transparent style buttons
 * Has a primary and a normal version
 * ```html
 *  <pg-fancy-button>Content</pg-fance-button> <!-- normal -->
 *  <pg-fancy-button primary>Content</pg-fance-button> <!-- primary -->
 * ```
 */
@Component({
  selector: "pg-fancy-button",
  templateUrl: "fancy-button.component.html",
  styleUrls: ["fancy-button.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class FancyButtonComponent implements OnInit {
  _primary = false;
  @Input()
  set primary(b: boolean) {
    this._primary = b || true;
  }

  get primary() {
    return this._primary;
  }

  constructor() {}

  ngOnInit() {}
}
