import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiwaratComponent } from './hiwarat.component';

describe('HiwaratComponent', () => {
  let component: HiwaratComponent;
  let fixture: ComponentFixture<HiwaratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiwaratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiwaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
