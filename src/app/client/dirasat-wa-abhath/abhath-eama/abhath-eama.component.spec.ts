import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhathEamaComponent } from './abhath-eama.component';

describe('AbhathEamaComponent', () => {
  let component: AbhathEamaComponent;
  let fixture: ComponentFixture<AbhathEamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbhathEamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbhathEamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
