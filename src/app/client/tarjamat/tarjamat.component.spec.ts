import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjamatComponent } from './tarjamat.component';

describe('TarjamatComponent', () => {
  let component: TarjamatComponent;
  let fixture: ComponentFixture<TarjamatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjamatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
