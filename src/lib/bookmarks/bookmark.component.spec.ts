import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredPageComponent } from './bookmark.component';

describe('ParallaxImageComponent', () => {
  let component: CenteredPageComponent;
  let fixture: ComponentFixture<CenteredPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenteredPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteredPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
