import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPublishComponent } from './list-publish.component';

describe('ListPublishComponent', () => {
  let component: ListPublishComponent;
  let fixture: ComponentFixture<ListPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
