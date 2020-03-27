import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaqalatComponent } from './list-maqalat.component';

describe('ListMaqalatComponent', () => {
  let component: ListMaqalatComponent;
  let fixture: ComponentFixture<ListMaqalatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMaqalatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMaqalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
