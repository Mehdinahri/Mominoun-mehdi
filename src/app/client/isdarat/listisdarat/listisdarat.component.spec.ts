import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListisdaratComponent } from './listisdarat.component';

describe('ListisdaratComponent', () => {
  let component: ListisdaratComponent;
  let fixture: ComponentFixture<ListisdaratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListisdaratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListisdaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
