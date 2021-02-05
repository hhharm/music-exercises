import { notes } from "../data/notes";

export type Note = {
  note: string;
  duration: string;
  high: number;
  tone: notes;
};
