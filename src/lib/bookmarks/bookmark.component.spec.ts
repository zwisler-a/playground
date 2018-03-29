import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookmarkComponent } from "./bookmark.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatIconModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule
} from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("BookmarkComponent", () => {
  let component: BookmarkComponent;
  let fixture: ComponentFixture<BookmarkComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          MatMenuModule,
          MatButtonModule,
          MatInputModule,
          RouterTestingModule,
          MatFormFieldModule,
          MatDividerModule,
          MatIconModule,
          BrowserAnimationsModule,
          FlexLayoutModule
        ],
        declarations: [BookmarkComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
