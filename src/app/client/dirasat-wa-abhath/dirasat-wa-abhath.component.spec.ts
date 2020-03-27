import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirasatWaAbhathComponent } from './dirasat-wa-abhath.component';

describe('DirasatWaAbhathComponent', () => {
  let component: DirasatWaAbhathComponent;
  let fixture: ComponentFixture<DirasatWaAbhathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirasatWaAbhathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirasatWaAbhathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
