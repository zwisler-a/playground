import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLayoutComponent } from './list-layout.component';

describe('ParallaxImageComponent', () => {
  let component: ListLayoutComponent;
  let fixture: ComponentFixture<ListLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
