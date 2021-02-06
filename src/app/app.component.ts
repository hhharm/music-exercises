import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import * as Tone from "tone";
import { Exercise, exercises } from "./data/exercise";

// todo: split into modules
// todo: add routing
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public exercises = exercises;
  public counter: { correct: number; total: number } = { correct: 0, total: 0 };
  public exercise: TemplateRef<void>;
  public currentExerciseType = "";
  public exerciseKeys = [];
  public started = false;

  @ViewChild("exerciseUpDown")
  exerciseUpDown: TemplateRef<void>;
  @ViewChild("whichNote")
  whichNote: TemplateRef<void>;
  @ViewChild("interval")
  interval: TemplateRef<void>;

  @HostBinding("class.app") get classApp() {
    return true;
  }

  @HostListener("click") pageClick() {
    this.init();
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.exerciseKeys = Object.keys(exercises);
  }

  private init() {
    if (!this.started) {
      Tone.start();
      this.chooseExercise(exercises.upDown);
      this.started = true;
      this.cdr.markForCheck();
    }
  }

  public chooseExercise(exercise: Exercise): void {
    switch (exercise.type) {
      case "upDown":
        this.exercise = this.exerciseUpDown;
        break;
      case "whichNote":
        this.exercise = this.whichNote;
        break;
      case "interval":
        this.exercise = this.interval;
        break;
    }
    this.currentExerciseType = exercise.type;
    this.cdr.markForCheck();
  }
}
