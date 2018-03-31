import { Injectable } from "@angular/core";

/**
 * Needs splashscreen.style.scss to be included in the styles
 * @include splashscreen($color)
 */
@Injectable()
export class SplashscreenService {
  private ssDiv: HTMLDivElement;
  private _displayed = false;

  /** @ignore */
  constructor() {
    this.ssDiv = document.createElement("div");
    this.ssDiv.setAttribute("class", "splash");
    this.ssDiv.innerHTML = `
      <div class="loader">
       <svg class="circular" viewBox="25 25 50 50">
         <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
       </svg>
      </div>`;
    this.show();
  }

  /**
   * Displays the SplashScreen
   */
  public show() {
    if (!this._displayed) {
      document.body.appendChild(this.ssDiv);
      this._displayed = true;
    }
  }

  /**
   * Hides the SplashScreen
   */
  public hide() {
    if (this._displayed) {
      document.body.removeChild(this.ssDiv);
      this._displayed = false;
    }
  }

  /**
   * If the SplashScreen is currently shown
   */
  get isDisplayed() {
    return this._displayed;
  }
}
