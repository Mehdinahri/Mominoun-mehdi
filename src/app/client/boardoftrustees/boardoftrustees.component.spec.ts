import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardoftrusteesComponent } from './boardoftrustees.component';

describe('BoardoftrusteesComponent', () => {
  let component: BoardoftrusteesComponent;
  let fixture: ComponentFixture<BoardoftrusteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardoftrusteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardoftrusteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
