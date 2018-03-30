import { Component, OnInit, Input, OnDestroy, ElementRef } from "@angular/core";
import { NavigationService } from "../services/navigation.service";

@Component({
  selector: "pg-list-page",
  templateUrl: "page.component.html",
  styleUrls: ["page.component.scss"]
})
export class PageComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() icon: string;
  @Input() action: string;

  constructor(
    private navigationService: NavigationService,
    private elemRef: ElementRef
  ) {}

  ngOnInit() {
    if (this.title && this.icon) {
      this.navigationService.navigation.push({
        name: this.title,
        icon: this.icon,
        routerLink: false,
        path: this.elemRef.nativeElement
      });
    }
  }

  scrollToTop() {
    console.log('a');
    window.scrollBy({
      top: -window.scrollY,
      left: 0,
      behavior: "smooth"
    });
  }

  ngOnDestroy() {
    this.navigationService.setModel(
      this.navigationService.navigation.filter(item => {
        return item.name !== this.title;
      })
    );
  }
}
