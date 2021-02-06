import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ExercisesModule } from "./components/exercises/exercises.module";
import { NoteNamePipeModule } from "./components/note-pipe/note-name.module";

@NgModule({
  imports: [BrowserModule, FormsModule, ExercisesModule, NoteNamePipeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
