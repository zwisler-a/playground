import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SearchBarService} from "./search-bar.service";

@Component({
  selector: 'pg-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @ViewChild('inputField')
  inputField: ElementRef;

  @Input()
  emptyFieldButton = false;

  @Input()
  id: string;

  @Output()
  readonly change = new EventEmitter();

  constructor(private searchBarService: SearchBarService) {
  }

  ngOnInit() {
    this.searchBarService.register(this.id, this);
  }

  onChange() {
    this.change.next(this.inputField.nativeElement.value);
  }

  public get value() {
    return this.inputField.nativeElement.value;
  }

  clearInput() {
    this.inputField.nativeElement.value = '';
    this.change.next('');
  }

}
