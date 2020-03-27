import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondryNavComponent } from './secondry-nav.component';

describe('SecondryNavComponent', () => {
  let component: SecondryNavComponent;
  let fixture: ComponentFixture<SecondryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
