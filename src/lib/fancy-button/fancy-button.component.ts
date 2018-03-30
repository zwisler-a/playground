import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "pg-fancy-button",
  templateUrl: "fancy-button.component.html",
  styleUrls: ["fancy-button.component.scss"]
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
