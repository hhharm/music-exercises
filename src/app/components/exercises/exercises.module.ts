import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonExerciseComponent } from "./common-exercise/common-exercise.component";
import { NoteExerciseComponent } from "./note-exercise/note-exercise.component";
import { NoteNamePipeModule } from "../note-pipe/note-name.module";
import { UpDownExerciseComponent } from './up-down-exercise/up-down-exercise.component';
import { IntervalExerciseComponent } from './interval-exercise/interval-exercise.component';

@NgModule({
  declarations: [CommonExerciseComponent, NoteExerciseComponent, UpDownExerciseComponent, IntervalExerciseComponent],
  imports: [CommonModule, NoteNamePipeModule],
  exports: [NoteExerciseComponent, UpDownExerciseComponent, IntervalExerciseComponent],
})
export class ExercisesModule {}
