import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMedia1Component } from './widget-media1.component';

describe('WidgetMedia1Component', () => {
  let component: WidgetMedia1Component;
  let fixture: ComponentFixture<WidgetMedia1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetMedia1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMedia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
