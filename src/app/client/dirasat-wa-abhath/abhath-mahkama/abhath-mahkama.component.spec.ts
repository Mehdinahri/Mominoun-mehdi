import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhathMahkamaComponent } from './abhath-mahkama.component';

describe('AbhathMahkamaComponent', () => {
  let component: AbhathMahkamaComponent;
  let fixture: ComponentFixture<AbhathMahkamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbhathMahkamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbhathMahkamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
