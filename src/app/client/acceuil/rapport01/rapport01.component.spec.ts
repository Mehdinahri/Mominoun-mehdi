import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rapport01Component } from './rapport01.component';

describe('Rapport01Component', () => {
  let component: Rapport01Component;
  let fixture: ComponentFixture<Rapport01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rapport01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rapport01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
