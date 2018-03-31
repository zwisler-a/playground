import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { SearchBarService } from "./search-bar.service";
/**
 * A fancy looking material style search bar
 * accessible via service {@link SearchBarService}
 */
@Component({
  selector: "pg-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SearchBarComponent implements OnInit {
  @ViewChild("inputField") inputField: ElementRef;

  /**
   * TODO usge
   */
  @Input() emptyFieldButton = false;

  /**
   * Identifier of the searchbar in the {@link SearchBarService}
   */
  @Input() id: string;

  /**
   * On Change event if the searchbar input changes
   * Emits the value as string
   */
  @Output() readonly change = new EventEmitter<string>();

  /** @ignore */
  constructor(private searchBarService: SearchBarService) {}

  ngOnInit() {
    this.searchBarService.register(this.id, this);
  }

  onChange() {
    this.change.next(this.inputField.nativeElement.value);
  }

  /**
   * Contains the value of the searchbar
   */
  public get value() {
    return this.inputField.nativeElement.value;
  }

  /**
   * Emptys the searchbar
   */
  clearInput() {
    this.inputField.nativeElement.value = "";
    this.change.next("");
  }
}
