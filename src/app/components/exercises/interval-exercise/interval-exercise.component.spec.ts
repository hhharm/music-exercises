import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalExerciseComponent } from './interval-exercise.component';

describe('IntervalExerciseComponent', () => {
  let component: IntervalExerciseComponent;
  let fixture: ComponentFixture<IntervalExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
