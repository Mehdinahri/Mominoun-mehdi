import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainisdaratComponent } from './mainisdarat.component';

describe('MainisdaratComponent', () => {
  let component: MainisdaratComponent;
  let fixture: ComponentFixture<MainisdaratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainisdaratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainisdaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
