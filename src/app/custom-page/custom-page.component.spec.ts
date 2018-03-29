import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomPageComponent } from "./custom-page.component";
import {
  CenteredPageModule,
  SearchBarModule,
  ListDetailViewModule,
  BookmarkModule
} from "../../lib";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

describe("CustomPageComponent", () => {
  let component: CustomPageComponent;
  let fixture: ComponentFixture<CustomPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CenteredPageModule,
          RouterTestingModule,
          SearchBarModule,
          ListDetailViewModule,
          BookmarkModule
        ],
        declarations: [CustomPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
