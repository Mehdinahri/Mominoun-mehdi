import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSlidComponent } from './widget-slid.component';

describe('WidgetSlidComponent', () => {
  let component: WidgetSlidComponent;
  let fixture: ComponentFixture<WidgetSlidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSlidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSlidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
