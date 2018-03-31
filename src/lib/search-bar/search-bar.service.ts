import { Injectable } from "@angular/core";
import { SearchBarComponent } from "./search-bar.component";
/**
 * Service to access all the {@link SeachBarComponent}s on the app
 */
@Injectable()
export class SearchBarService {
  private searchBars = [];

  constructor() {}

  /**
   * Adds a new searchbar to the service
   * @param id Identifier
   * @param ref Component
   */
  register(id: string, ref: SearchBarComponent) {
    this.searchBars[id] = ref;
  }

  /**
   * Retrieves a SearchBarComponenet
   * @param id Identifier
   */
  get(id: string) {
    return this.searchBars[id];
  }
}
