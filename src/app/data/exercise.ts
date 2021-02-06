import { Answer } from "../types/exercise";

export type ExerciseType = "upDown" | "whichNote" | "interval";
export type Exercise = {
  name: string;
  type: ExerciseType;
};

export const exercises: Record<string, Exercise> = {
  upDown: { name: "Вверх или вниз?", type: "upDown" },
  interval: { name: "Какой интервал?", type: "interval" },
  note: { name: "Какая нота?", type: "whichNote" },
};

export const upDownDirs: Map<Answer, string> = new Map([
  [true, "вверх"],
  [false, "вниз"],
]);
