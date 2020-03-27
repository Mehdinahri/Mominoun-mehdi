import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbhathComponent } from './list-abhath.component';

describe('ListAbhathComponent', () => {
  let component: ListAbhathComponent;
  let fixture: ComponentFixture<ListAbhathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAbhathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAbhathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
