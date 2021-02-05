import { notes } from "../data/notes";
import { Note } from "../types/note";

export const getRandomNote = (noteToExclude?: number): Note => {
  let randomNote = Math.floor(Math.random() * 11);
  randomNote =
    noteToExclude === randomNote ? (randomNote + 1) % 11 : randomNote;
  const note = notes[randomNote];
  const hight = 4;
  return {
    note: "" + note + hight,
    high: hight,
    tone: randomNote,
    duration: "8n"
  };
};

export const isHigher = (a: Note, b: Note): boolean => {
  return a.high > b.high || (a.high === b.high && a.tone > b.tone);
};
