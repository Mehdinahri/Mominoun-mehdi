import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsdaratnavComponent } from './isdaratnav.component';

describe('IsdaratnavComponent', () => {
  let component: IsdaratnavComponent;
  let fixture: ComponentFixture<IsdaratnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsdaratnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsdaratnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
