import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { Answer } from "../../../types/exercise";
import { Note } from "../../../types/note";
import { getRandomNote } from "../../../utils/note.utils";
import { allTones, tones } from "../../../data/notes";

@Component({
  selector: "app-note-exercise",
  templateUrl: "./note-exercise.component.html",
  styleUrls: ["./note-exercise.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteExerciseComponent implements OnInit {
  public answers = allTones.map((tone) => "" + tones[tone]);
  public correctAnswer: Answer;
  public toPlay: Note[] = [];
  public answerText = "";

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {}

  public whichNoteExercise() {
    this.toPlay = [getRandomNote()];
    this.correctAnswer = tones[this.toPlay[0].tone];
    this.answerText = `Это была нота ${tones[this.toPlay[0].tone]}`;
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }
}
