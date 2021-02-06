import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDownExerciseComponent } from './up-down-exercise.component';

describe('UpDownExerciseComponent', () => {
  let component: UpDownExerciseComponent;
  let fixture: ComponentFixture<UpDownExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpDownExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDownExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
