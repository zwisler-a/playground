import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChildren,
  AfterViewInit,
  QueryList,
  ElementRef,
  ContentChildren,
  ViewChild,
  ViewContainerRef,
  ViewRef,
  OnDestroy
} from "@angular/core";
import { MatCard } from "@angular/material";
import { ObservableMedia } from "@angular/flex-layout";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "pg-history-cards",
  templateUrl: "./histroy-cards.component.html",
  styleUrls: ["./histroy-cards.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HistoryCardsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(MatCard, { read: ElementRef })
  cards: QueryList<ElementRef>;
  @ContentChildren(MatCard, { read: ElementRef })
  contentCards: QueryList<ElementRef>;
  @ViewChild("left") leftContent: ElementRef;
  @ViewChild("right") rightContent: ElementRef;

  anchors: { top: number }[] = [];

  constructor(private elementRef: ElementRef, private media: ObservableMedia) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.orderCards();
    });
  }

  ngOnInit() {}
  ngOnDestroy(): void {}

  private orderCards() {
    const small = this.media.isActive("xs");
    const hostElem = this.elementRef.nativeElement;
    this.anchors = this.contentCards.map((card, index) => {
      if (!(index % 2) && !small) {
        this.addToLeft(card);
      } else {
        this.addToRight(card);
      }
      const cardElem = card.nativeElement;
      return {
        top:
          cardElem.offsetTop -
          hostElem.offsetTop +
          30 * Math.floor(index / (small ? 1 : 2)) +
          7.5 +
          cardElem.clientHeight / 2
      };
    });
  }

  private addToLeft(elem) {
    this.leftContent.nativeElement.appendChild(elem.nativeElement);
  }

  private addToRight(elem) {
    this.rightContent.nativeElement.appendChild(elem.nativeElement);
  }
}
