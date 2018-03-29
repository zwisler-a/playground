import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListDetailViewComponent } from "./list-detail-view.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("ListDetailViewComponent", () => {
  let component: ListDetailViewComponent;
  let fixture: ComponentFixture<ListDetailViewComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          FlexLayoutModule,
          BrowserAnimationsModule,
          MatSidenavModule,
          MatButtonModule,
          MatIconModule,
          MatToolbarModule,
          RouterTestingModule
        ],
        declarations: [ListDetailViewComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
