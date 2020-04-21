import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPropComponent } from './media-prop.component';

describe('MediaPropComponent', () => {
  let component: MediaPropComponent;
  let fixture: ComponentFixture<MediaPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
