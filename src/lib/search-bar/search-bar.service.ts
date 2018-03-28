import {Injectable} from '@angular/core';
import {SearchBarComponent} from "./search-bar.component";

@Injectable()
export class SearchBarService {

  private searchBars = [];

  constructor() {
  }

  register(id: string, ref: SearchBarComponent) {
    this.searchBars[id] = ref;
  }

  get(id: string) {
    return this.searchBars[id];
  }
}
