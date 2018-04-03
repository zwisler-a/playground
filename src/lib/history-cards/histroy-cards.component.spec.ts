import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HistoryCardsComponent } from "./histroy-cards.component";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

describe("HistoryCardsComponent", () => {
  let component: HistoryCardsComponent;
  let fixture: ComponentFixture<HistoryCardsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, MatCardModule, FlexLayoutModule],
        declarations: [HistoryCardsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
