import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomCarouselComponent } from "./custom-carousel.component";
import {
  CarouselModule,
  ListLayoutModule,
  HistoryCardsModule
} from "../../lib";
import { MatCardModule } from "@angular/material";
import { CommonModule } from "@angular/common";

describe("CustomCarouselComponent", () => {
  let component: CustomCarouselComponent;
  let fixture: ComponentFixture<CustomCarouselComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CarouselModule,
          ListLayoutModule,
          MatCardModule,
          HistoryCardsModule,
          CommonModule
        ],
        declarations: [CustomCarouselComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
