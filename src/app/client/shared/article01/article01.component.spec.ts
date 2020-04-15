import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article01Component } from './article01.component';

describe('Article01Component', () => {
  let component: Article01Component;
  let fixture: ComponentFixture<Article01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
