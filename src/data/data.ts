export type Note = {
  id: number;
  title: string;
};

export const notes: Note[] = new Array(15).fill(1).map((_, i) => ({
  id: i,
  title: `Note ${i}`,
}));
