import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article02Component } from './article02.component';

describe('Article02Component', () => {
  let component: Article02Component;
  let fixture: ComponentFixture<Article02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
