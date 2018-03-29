import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomCarouselComponent } from "./custom-carousel.component";
import { CarouselModule } from "../../lib";

describe("CustomCarouselComponent", () => {
  let component: CustomCarouselComponent;
  let fixture: ComponentFixture<CustomCarouselComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CarouselModule],
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
