import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsdaratComponent } from './isdarat.component';

describe('IsdaratComponent', () => {
  let component: IsdaratComponent;
  let fixture: ComponentFixture<IsdaratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsdaratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsdaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
