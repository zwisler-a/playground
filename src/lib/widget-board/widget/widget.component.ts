import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "pg-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class WidgetComponent implements OnInit {
  @ViewChild("container", { read: ViewContainerRef })
  viewContainerRef;

  @Input() editing = false;

  @Output() dragstart = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
