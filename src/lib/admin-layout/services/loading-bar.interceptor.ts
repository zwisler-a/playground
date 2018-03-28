import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {LoadingBarService} from "./loading-bar.service";

@Injectable()
export class LoadingBarInterceptor implements HttpInterceptor {

  private openRequests = 0;

  constructor(private loadingService: LoadingBarService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.openRequests++;
    if (this.openRequests > 0) {
      this.loadingService.xhrCallsOpen = true;
    }
    return next.handle(req).pipe((ev) => {
      ev.subscribe((res) => {
        if (res.type === 4) {
          this.openRequests--;
          if (this.openRequests == 0) {
            this.loadingService.xhrCallsOpen = false;
          }
        }
      }, () => {
        this.openRequests--;
        if (this.openRequests == 0) {
          this.loadingService.xhrCallsOpen = false;
        }
      });
      return ev;
    });
  }

}
