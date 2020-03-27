import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmajalatComponent } from './listmajalat.component';

describe('ListmajalatComponent', () => {
  let component: ListmajalatComponent;
  let fixture: ComponentFixture<ListmajalatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmajalatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmajalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
