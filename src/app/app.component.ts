import { AfterViewChecked, AfterViewInit,  ChangeDetectionStrategy, ChangeDetectorRef,  Component, HostBinding, OnInit, TemplateRef,  VERSION, ViewChild } from "@angular/core";
import * as Tone from "tone";
import { Exercise, exercises, upDownDirs } from "./data/exercise";
import { allNotes, notes } from "./data/notes";
import { Answer } from "./types/exercise";
import type { Note } from "./types/note";
import { isHigher, getRandomNote } from "./utils/note.utils";

// todo: split into modules
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  public today = Date.now();
  public exercises = exercises;
  public answer: string = "";
  public isCorrect: boolean = false;
  public counter: {correct: number, total: number} = {correct: 0, total: 0};
  public answeredAtLeastOnce = false;
  public exercise: TemplateRef<void>;
  public allNotes = allNotes;

  private correctAnswer: Answer;
  private toPlay: Note[];

  //thing that plays music
  private synth;

  @ViewChild('exerciseUpDown')
  exerciseUpDown: TemplateRef<void>;
  @ViewChild('whichNote')
  whichNote: TemplateRef<void>;

  @HostBinding("class.app") get classApp() {
    return true;
  }

  constructor(private cdr: ChangeDetectorRef){}
  ngOnInit() {
    //create a synth and connect it to the main output (your speakers)
    this.synth = new Tone.Synth().toDestination();
  }
  ngAfterViewInit() {
    this.chooseExercise(exercises.note);
  }
  getNoteName(note: number) {
    return notes[note];
  }

  checkCorrectUpDown(value: Answer): void {
    const direction = upDownDirs.get(this.correctAnswer);
    this.isCorrect = this.correctAnswer === value;
    this.answer = this.isCorrect ? "Верно!" : "Неверно.";
    this.answer += ` Мелодия идёт ${direction}. Это были ноты ${this.toPlay.map(
      ({note}) => note
    ).join(", ")}`;
    this.updateCounter();
    this.cdr.markForCheck();
  }
  checkCorrectWhichNote(value: Answer): void {
    this.isCorrect = this.correctAnswer === value;
    this.answer = this.isCorrect ? "Верно!" : "Неверно.";
    this.answer += `Это была нота ${notes[this.toPlay[0].tone]}`;
    this.updateCounter();
    this.cdr.markForCheck();
  }

  public chooseExercise(exercise: Exercise): void {
    switch (exercise.type) {
      case "upDown":
      this.exercise = this.exerciseUpDown;
      this.upDownExercise();
      break;
      case "whichNote":
      this.exercise = this.whichNote;
      this.whichNoteExercise();
      break;
    }
    this.cdr.markForCheck();
  }
  private updateCounter() {
    if (!this.answeredAtLeastOnce) {
      this.counter.correct += this.isCorrect ? 1 : 0;
      this.counter.total++;
      this.answeredAtLeastOnce = true;
    }
  }

  public upDownExercise() {
    this.answer = "";
    const firstNote = getRandomNote();
    this.toPlay = [firstNote, getRandomNote(firstNote.tone)];
    this.correctAnswer = isHigher(this.toPlay[1], this.toPlay[0]);
    this.repeat();
    this.answeredAtLeastOnce = false;
    this.cdr.markForCheck();
  }
  public whichNoteExercise() {
    this.answer = "";
    this.toPlay = [getRandomNote()];
    this.correctAnswer = this.toPlay[0].tone;
    this.repeat();
    this.answeredAtLeastOnce = false;
    this.cdr.markForCheck();
  }

  public repeat() {
    let when = Tone.now()
    this.toPlay.forEach(note => {
      this.playNote(note, when);
      when += 0.5;
    })
  }

  private playNote({note, duration}: Note, when: number): void {
    // note format: note itself + octava (e.g. c4)
    // duration format: have no idea. e.g. 8n
    this.synth.triggerAttackRelease(note, duration, when);
  }
}
