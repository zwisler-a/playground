import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[pgIsInView]',
  exportAs: 'inView'
})
export class IsInViewDirective {

  @Input()
  offset = 0;

  @Input()
  biDirectional = false;

  @Input()
  inPercent = false;

  public inView = false;

  constructor(private elemRef: ElementRef) {
    setTimeout(() => {
      this.inView = this.eval();
    });
    window.addEventListener('scroll', () => {
      if (this.inView !== this.eval()) {
        this.inView = !this.inView;
      }
    }, true);
  }


  private eval() {
    return (window.scrollY + window.innerHeight >=
      this.elemRef.nativeElement.offsetTop - (this.inPercent ? window.innerHeight / this.offset : this.offset) &&
      (this.elemRef.nativeElement.offsetTop + (this.inPercent ? window.innerHeight / this.offset : this.offset) > window.scrollY || !this.biDirectional)
    );
  }

}
