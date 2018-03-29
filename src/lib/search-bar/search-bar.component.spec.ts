import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchBarComponent } from "./search-bar.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule, MatButtonModule } from "@angular/material";
import { SearchBarService } from "./search-bar.service";

describe("SearchBarComponent", () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FlexLayoutModule, MatIconModule, MatButtonModule],
        providers: [SearchBarService],
        declarations: [SearchBarComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
