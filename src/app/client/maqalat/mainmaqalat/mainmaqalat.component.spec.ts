import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainmaqalatComponent } from './mainmaqalat.component';

describe('MainmaqalatComponent', () => {
  let component: MainmaqalatComponent;
  let fixture: ComponentFixture<MainmaqalatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainmaqalatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainmaqalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
