import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from "@angular/core";
import { allTones, tones } from "../../../data/notes";
import { Answer } from "../../../types/exercise";
import { Note } from "../../../types/note";
import { getRandomNote } from "../../../utils/note.utils";

import * as Tone from "tone";

@Component({
  selector: "app-common-exercise",
  templateUrl: "./common-exercise.component.html",
  styleUrls: ["./common-exercise.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonExerciseComponent implements OnInit, OnChanges {
  @Input() question: string = "";
  @Input() answers: Answer[] = [];
  @Input() answerStyleClass: string = "";
  @Input() nextText: string = "";
  @Input() toPlay: Note[] = [];
  @Input() correctAnswer: Answer;
  @Input() additionalAnswerText: string = "";

  @Output() newExercise = new EventEmitter<void>();
  @Output() userAsnwer = new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef) {}

  public answer: string = "";
  public isCorrect: boolean = false;
  public counter: { correct: number; total: number } = {
    correct: 0,
    total: 0,
  };
  public answeredAtLeastOnce = false;

  //thing that plays music
  private synth;

  ngOnInit(): void {
    //create a synth and connect it to the main output (your speakers)
    this.synth = new Tone.Synth().toDestination();
    this.nextExercise();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.toPlay?.currentValue?.length) {
      this.repeat();
    }
  }

  public nextExercise() {
    this.answeredAtLeastOnce = false;
    this.newExercise.emit();
    this.cdr.markForCheck();
  }

  public repeat() {
    let when = Tone.now();
    this.toPlay.forEach((note) => {
      this.playNote(note, when);
      when += 0.5;
    });
  }

  checkCorrect(value: Answer): void {
    this.isCorrect = this.correctAnswer === value;
    this.answer = this.isCorrect ? "Верно!" : "Неверно.";
    this.userAsnwer.emit(this.isCorrect);
    this.updateCounter();
    this.cdr.markForCheck();
  }

  private updateCounter() {
    if (!this.answeredAtLeastOnce) {
      this.counter.correct += this.isCorrect ? 1 : 0;
      this.counter.total++;
      this.answeredAtLeastOnce = true;
    }
  }

  private playNote({ note, duration }: Note, when: number): void {
    // note format: tone + octava (e.g. c4)
    // duration format: have no idea. e.g. 8n
    this.synth.triggerAttackRelease(note, duration, when);
  }
}
