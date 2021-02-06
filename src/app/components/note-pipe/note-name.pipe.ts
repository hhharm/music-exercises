import { Pipe, PipeTransform } from "@angular/core";
import { tones } from "../../data/notes";

@Pipe({
  name: "noteName",
})
export class NoteNamePipe implements PipeTransform {
  transform(tone: number): string {
    return tones[tone];
  }
}
