import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjamatlistComponent } from './tarjamatlist.component';

describe('TarjamatlistComponent', () => {
  let component: TarjamatlistComponent;
  let fixture: ComponentFixture<TarjamatlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjamatlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjamatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
