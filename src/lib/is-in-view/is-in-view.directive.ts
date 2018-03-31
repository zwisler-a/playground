import { Directive, ElementRef, Input } from "@angular/core";

/**
 * Directive to determine if an element is in view
 * ```html
 * <div id="large-div">
 *  <div id="small-div" pgIsInView #smallDiv="inView"></div>
 * </div>
 * {{smallDiv.inView}}
 * ```
 */
@Directive({
  selector: "[pgIsInView]",
  exportAs: "inView"
})
export class IsInViewDirective {
  /**
   * Offset in both directions (makes the element 'bigger')
   */
  @Input() offset = 0;

  /**
   * If false the inView value will be true if the element is above the window bottom
   * If true the inView value will be true only if the element is inside the viewable area
   */
  @Input() biDirectional = false;

  /**
   * TODO proper percent calculation
   * Currently only offset=window.innerHeight/inPercent
   */
  @Input() inPercent = false;

  /**
   * Represents if the element is in the viewable area
   */
  public inView = false;

  /**
   * @ignore
   */
  constructor(private elemRef: ElementRef) {
    setTimeout(() => {
      this.inView = this.eval();
    });
    window.addEventListener(
      "scroll",
      () => {
        if (this.inView !== this.eval()) {
          this.inView = !this.inView;
        }
      },
      true
    );
  }

  private eval() {
    return (
      window.scrollY + window.innerHeight >=
        this.elemRef.nativeElement.offsetTop -
          (this.inPercent ? window.innerHeight / this.offset : this.offset) &&
      (this.elemRef.nativeElement.offsetTop +
        (this.inPercent ? window.innerHeight / this.offset : this.offset) >
        window.scrollY ||
        !this.biDirectional)
    );
  }
}
