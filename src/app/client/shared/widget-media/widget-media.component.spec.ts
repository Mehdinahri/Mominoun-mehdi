import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMediaComponent } from './widget-media.component';

describe('WidgetMediaComponent', () => {
  let component: WidgetMediaComponent;
  let fixture: ComponentFixture<WidgetMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
