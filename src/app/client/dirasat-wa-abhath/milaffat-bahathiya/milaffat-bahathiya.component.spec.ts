import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilaffatBahathiyaComponent } from './milaffat-bahathiya.component';

describe('MilaffatBahathiyaComponent', () => {
  let component: MilaffatBahathiyaComponent;
  let fixture: ComponentFixture<MilaffatBahathiyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilaffatBahathiyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilaffatBahathiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
