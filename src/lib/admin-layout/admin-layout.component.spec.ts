import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminLayoutComponent } from "./admin-layout.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import {
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressBarModule
} from "@angular/material";
import { LeftSidenavComponent } from "./left-sidenav/left-sidenav.component";
import { SideNavService, LoadingBarService, NavigationService } from "..";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";

describe("AdminLayoutComponent", () => {
  let component: AdminLayoutComponent;
  let fixture: ComponentFixture<AdminLayoutComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          FlexLayoutModule,
          BrowserAnimationsModule,
          RouterTestingModule,
          HttpClientModule,
          MatButtonModule,
          MatIconModule,
          MatToolbarModule,
          MatSidenavModule,
          MatProgressBarModule
        ],
        providers: [SideNavService, LoadingBarService, NavigationService],
        declarations: [AdminLayoutComponent, LeftSidenavComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
