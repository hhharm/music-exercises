import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { upDownDirs } from "../../../data/exercise";
import { allIntervals, intervals } from "../../../data/notes";
import { Answer } from "../../../types/exercise";
import { Note } from "../../../types/note";
import { getInterval, getRandomInterval } from "../../../utils/note.utils";

@Component({
  selector: "app-interval-exercise",
  templateUrl: "./interval-exercise.component.html",
  styleUrls: ["./interval-exercise.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntervalExerciseComponent implements OnInit {
  public answers = allIntervals.map((interval) => "" + intervals[interval]);
  public correctAnswer: Answer;
  public toPlay: Note[] = [];
  public answerText = "";
  private interval = 5;

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {}

  public newExercise() {
    const [firstNote, secondNote, interval] = getRandomInterval();
    // const [firstNote, secondNote] = getInterval(this.interval);
    // const interval = this.interval;
    this.interval++;
    this.toPlay = [firstNote, secondNote];
    this.correctAnswer = intervals[interval];
    this.answerText = `Этот интервал называется ${
      this.correctAnswer
    }. Количество полутонов: ${interval}. Ноты: ${this.toPlay
      .map(({ note }) => note)
      .join(", ")}`;
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }
}
