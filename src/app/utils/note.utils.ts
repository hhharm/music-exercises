import { allIntervals, allTones, intervals, tones } from "../data/notes";
import { Note } from "../types/note";
const TONES_NUMBER = allTones.length;
const INTERVALS_NUMBER = allIntervals.length;
const HIGH = 4;
const DURATION = "8n";

export const getRandomNote = (noteToExclude?: number): Note => {
  let randomTone = Math.floor(Math.random() * (TONES_NUMBER - 1));
  randomTone =
    noteToExclude === randomTone ? (randomTone + 1) % TONES_NUMBER : randomTone;
  const note = tones[randomTone];
  return {
    note: "" + note + HIGH,
    high: HIGH,
    tone: randomTone,
    duration: DURATION,
  };
};

export const getRandomInterval = (): [Note, Note, intervals] => {
  let firstTone = Math.floor(Math.random() * (TONES_NUMBER - 1));
  let interval = Math.floor(Math.random() * (INTERVALS_NUMBER - 1));
  const firstNote = {
    note: "" + tones[firstTone] + HIGH,
    high: HIGH,
    tone: firstTone,
    duration: DURATION,
  };
  const secondTone = (firstTone + interval) % TONES_NUMBER;
  const secondHigh = firstTone + interval >= TONES_NUMBER ? HIGH + 1 : HIGH;
  const secondNote = {
    note: "" + tones[secondTone] + secondHigh,
    high: secondHigh,
    tone: secondTone,
    duration: DURATION,
  };
  return [firstNote, secondNote, interval];
};

export const getInterval = (interval: intervals): [Note, Note] => {
  let firstTone = Math.floor(Math.random() * (TONES_NUMBER - 1));
  const firstNote = {
    note: "" + tones[firstTone] + HIGH,
    high: HIGH,
    tone: firstTone,
    duration: DURATION,
  };
  const secondTone = (firstTone + interval) % TONES_NUMBER;
  const secondHigh = firstTone + interval >= TONES_NUMBER ? HIGH + 1 : HIGH;
  const secondNote = {
    note: "" + tones[secondTone] + secondHigh,
    high: secondHigh,
    tone: secondTone,
    duration: DURATION,
  };
  return [firstNote, secondNote];
};
export const isHigher = (a: Note, b: Note): boolean => {
  return a.high > b.high || (a.high === b.high && a.tone > b.tone);
};
