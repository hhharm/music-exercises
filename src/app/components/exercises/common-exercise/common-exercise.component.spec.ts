import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CommonExerciseComponent } from "./common-exercise.component";

describe("CommonExerciseComponent", () => {
  let component: CommonExerciseComponent;
  let fixture: ComponentFixture<CommonExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonExerciseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
