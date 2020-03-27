import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaqalatrayComponent } from './maqalatray.component';

describe('MaqalatrayComponent', () => {
  let component: MaqalatrayComponent;
  let fixture: ComponentFixture<MaqalatrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaqalatrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaqalatrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
