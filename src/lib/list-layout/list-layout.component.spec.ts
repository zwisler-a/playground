import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListLayoutComponent } from "./list-layout.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterTestingModule } from "@angular/router/testing";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { NavigationService } from "./navigation.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("ListLayoutComponent", () => {
  let component: ListLayoutComponent;
  let fixture: ComponentFixture<ListLayoutComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          FlexLayoutModule,
          RouterTestingModule,
          MatButtonModule,
          BrowserAnimationsModule,
          MatIconModule
        ],
        providers: [NavigationService],
        declarations: [ListLayoutComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
