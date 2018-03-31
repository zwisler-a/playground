import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * A centered page card componenet with a header and a content part
 * ```html
 * <pg-centered-page>
 *   <div header>Header</div>
 *   <div content>Content</div>
 * </pg-centered-page>
 * ```
 */
@Component({
  selector: 'pg-centered-page',
  templateUrl: './centered-page.component.html',
  styleUrls: ['./centered-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CenteredPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
