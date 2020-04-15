import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouMaqalatComponent } from './carou-maqalat.component';

describe('CarouMaqalatComponent', () => {
  let component: CarouMaqalatComponent;
  let fixture: ComponentFixture<CarouMaqalatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouMaqalatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouMaqalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
