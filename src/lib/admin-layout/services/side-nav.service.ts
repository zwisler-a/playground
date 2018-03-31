import {EventEmitter, Injectable} from '@angular/core';
import {ObservableMedia} from "@angular/flex-layout";
import {MediaChange} from "@angular/flex-layout/typings/media-query/media-change";


/**
 * Helps to determine the state the side nav should be in
 */
@Injectable()
export class SideNavService {
  _state: "big" | "small" | "hidden" = "big";

  readonly onStateChange = new EventEmitter<"big" | "small" | "hidden">();

  constructor(private media: ObservableMedia) {
    this.media.subscribe((state: MediaChange) => {
      this.determineState(state.mqAlias);
    });
  }

  set state(state: "big" | "small" | "hidden") {
    this._state = state;
    this.onStateChange.emit(state);
  }

  get state(): "big" | "small" | "hidden" {
    return this._state;
  }

  /**
   * Toggles the expansion state of the side-nav depending on the current window size
   * The side-nav has 3 states hidden <-> small <-> big
   */
  toggleInContextWidth() {
    if (this.media.isActive('xs') || this.media.isActive('sm')) {
      if (this.state === "small" || this.state === "big") {
        this.state = "hidden";
      } else if (this.state === "hidden") {
        this.state = "big";
      }
    } else if (this.media.isActive('md') || this.media.isActive('xl') || this.media.isActive('lg')) {
      if (this.state === "small" || this.state === "hidden") {
        this.state = "big";
      } else if (this.state === "big") {
        this.state = "small";
      }
    }
  }

  /**
   * Sets the state in dependence of the current breakpoint
   * @param {string} mqAlias
   */
  private determineState(mqAlias: string) {
    if (mqAlias === "xs" || mqAlias === "sm") {
      this.state = "hidden";
    } else if (mqAlias === "md") {
      this.state = "small";
    } else if (mqAlias === "lg" || mqAlias === "xl") {
      this.state = "big";
    }
  }
}
