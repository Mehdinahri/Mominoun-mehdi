import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaqalatComponent } from './maqalat.component';

describe('MaqalatComponent', () => {
  let component: MaqalatComponent;
  let fixture: ComponentFixture<MaqalatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaqalatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaqalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
