import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetBoardComponent } from "./widget-board.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from "@angular/material";
import { WidgetComponent } from "./widget/widget.component";

describe("WidgetBoardComponent", () => {
  let component: WidgetBoardComponent;
  let fixture: ComponentFixture<WidgetBoardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          FlexLayoutModule,
          MatGridListModule,
          MatCardModule,
          MatButtonModule,
          MatIconModule,
          MatToolbarModule
        ],
        declarations: [WidgetBoardComponent, WidgetComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
