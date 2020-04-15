import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Magasin01Component } from './magasin01.component';

describe('Magasin01Component', () => {
  let component: Magasin01Component;
  let fixture: ComponentFixture<Magasin01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Magasin01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Magasin01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
