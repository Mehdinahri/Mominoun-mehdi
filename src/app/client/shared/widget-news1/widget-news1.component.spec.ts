import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNews1Component } from './widget-news1.component';

describe('WidgetNews1Component', () => {
  let component: WidgetNews1Component;
  let fixture: ComponentFixture<WidgetNews1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetNews1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetNews1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
