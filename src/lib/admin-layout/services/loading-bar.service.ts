import {Injectable} from "@angular/core";

/**
 * Service to configure the LoadingBar at the top of the admin-layout
 * @see material.angular.io - loading bar
 *
 */
@Injectable()
export class LoadingBarService {

  public mode = "indeterminate";
  public value = 0;

  /**
   * Is set to true is any calls are open
   * @type {boolean}
   */
  public xhrCallsOpen = false;
  /**
   * If set to true it displays the loading-bar whenever a HttpClient call is made
   * @see loading-bar.interceptor
   * @type {boolean}
   */
  public observeXhr = true;

}
