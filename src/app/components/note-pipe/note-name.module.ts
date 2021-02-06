import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NoteNamePipe } from "../note-pipe/note-name.pipe";

@NgModule({
  declarations: [NoteNamePipe],
  imports: [CommonModule],
  exports: [NoteNamePipe],
})
export class NoteNamePipeModule {}
