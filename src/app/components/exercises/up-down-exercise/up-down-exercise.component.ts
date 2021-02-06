import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";

import { Answer } from "../../../types/exercise";
import { Note } from "../../../types/note";
import { getRandomNote, isHigher } from "../../../utils/note.utils";
import { upDownDirs } from "../../../data/exercise";

@Component({
  selector: "app-up-down-exercise",
  templateUrl: "./up-down-exercise.component.html",
  styleUrls: ["./up-down-exercise.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpDownExerciseComponent implements OnInit {
  public answers = Array.from(upDownDirs.values());
  public correctAnswer: Answer;
  public toPlay: Note[] = [];
  public answerText = "";

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {}

  public newExercise() {
    this.toPlay = [getRandomNote()];
    const firstNote = getRandomNote();
    this.toPlay = [firstNote, getRandomNote(firstNote.tone)];
    this.correctAnswer = upDownDirs.get(
      isHigher(this.toPlay[1], this.toPlay[0])
    );
    this.answerText = `Мелодия идёт ${
      this.correctAnswer
    }. Это были ноты ${this.toPlay.map(({ note }) => note).join(", ")}`;
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }
}
