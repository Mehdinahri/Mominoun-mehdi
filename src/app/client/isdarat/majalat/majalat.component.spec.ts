import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajalatComponent } from './majalat.component';

describe('MajalatComponent', () => {
  let component: MajalatComponent;
  let fixture: ComponentFixture<MajalatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajalatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
