export type ExerciseType = "upDown" | "whichNote";
export type Exercise = {
  name: string;
  type: ExerciseType;
};

export const exercises: Record<string, Exercise> = {
  upDown: { name: "Вверх или вниз?", type: "upDown" },
  // interval: { name: "Какой интервал?" },
  note: { name: "Какая нота?", type: "whichNote" }
};

export const upDownDirs: Map<boolean, string> = new Map([
  [true, "вверх"],
  [false, "вниз"]
]);
