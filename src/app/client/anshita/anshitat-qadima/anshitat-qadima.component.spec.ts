import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnshitatQadimaComponent } from './anshitat-qadima.component';

describe('AnshitatQadimaComponent', () => {
  let component: AnshitatQadimaComponent;
  let fixture: ComponentFixture<AnshitatQadimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnshitatQadimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnshitatQadimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
