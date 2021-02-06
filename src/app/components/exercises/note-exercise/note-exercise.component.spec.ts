import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteExerciseComponent } from './note-exercise.component';

describe('NoteExerciseComponent', () => {
  let component: NoteExerciseComponent;
  let fixture: ComponentFixture<NoteExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
