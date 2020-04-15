import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPropComponent } from './news-prop.component';

describe('NewsPropComponent', () => {
  let component: NewsPropComponent;
  let fixture: ComponentFixture<NewsPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
