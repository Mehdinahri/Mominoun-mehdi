import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroniaComponent } from './electronia.component';

describe('ElectroniaComponent', () => {
  let component: ElectroniaComponent;
  let fixture: ComponentFixture<ElectroniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectroniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
