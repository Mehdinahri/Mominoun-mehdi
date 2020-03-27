import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnshitanavComponent } from './anshitanav.component';

describe('AnshitanavComponent', () => {
  let component: AnshitanavComponent;
  let fixture: ComponentFixture<AnshitanavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnshitanavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnshitanavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
