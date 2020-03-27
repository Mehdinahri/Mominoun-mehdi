import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QiraatFiKutobComponent } from './qiraat-fi-kutob.component';

describe('QiraatFiKutobComponent', () => {
  let component: QiraatFiKutobComponent;
  let fixture: ComponentFixture<QiraatFiKutobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QiraatFiKutobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QiraatFiKutobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
