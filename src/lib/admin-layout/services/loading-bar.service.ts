import {Injectable} from "@angular/core";

@Injectable()
export class LoadingBarService {

  public mode = "indeterminate";
  public value = 0;

  public xhrCallsOpen = false;
  public observeXhr = true;

}
