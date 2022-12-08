import type { AchieveModel } from "@/logic/types";

export type MemoryCard = {
  cardId: number;
  opened: boolean;
  matched: boolean;
  hidden: boolean;
  model: AchieveModel;
};

export type MemoryBoard = {
  rows: number;
  columns: number;
  cards: MemoryCard[][];
};

// https://stackoverflow.com/questions/35656677/split-array-into-two-dimensional-array-is-there-a-better-solution
function chunk<T = any>(arr: T[], size: number, limit?: number): T[][] {
  //check if size is > 1 and is an integer
  if (size !== Math.floor(size) || size < 1)
    throw new Error("invalid chunl-size: " + size);

  const chunks: T[][] = [];

  for (let i = 0; i < ((limit || 0) * size || arr.length); i += size)
    chunks.push(arr.slice(i, size));

  return chunks;
}

export function generateMemoryBoard(
  rows: number,
  columns: number,
  elementsToAttach: any[]
) {
  const board: MemoryBoard = {
    rows: rows,
    columns: columns,
    cards: chunk(elementsToAttach, columns, rows),
  };
}

export function getRandomNumbers(quantity: number, max: number): number[] {
  const set = new Set<number>()
  while(set.size < quantity) {
    set.add(Math.floor(Math.random() * max) + 1)
  }
  return Array.from(set.values())
}
export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
