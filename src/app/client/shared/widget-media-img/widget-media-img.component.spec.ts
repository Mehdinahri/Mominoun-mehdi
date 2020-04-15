import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMediaImgComponent } from './widget-media-img.component';

describe('WidgetMediaImgComponent', () => {
  let component: WidgetMediaImgComponent;
  let fixture: ComponentFixture<WidgetMediaImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetMediaImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMediaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
