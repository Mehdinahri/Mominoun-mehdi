import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Event02Component } from './event02.component';

describe('Event02Component', () => {
  let component: Event02Component;
  let fixture: ComponentFixture<Event02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Event02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Event02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
