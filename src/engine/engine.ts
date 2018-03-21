export type Player = 'X' | 'O' | null;
export type GridElement = Player;
export type GridRow = GridElement[];
export type Grid = GridRow[];

/**
 * generateInitialGrid is used to generate empty grid to play
 */
export const generateInitialGrid = (): Grid => [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

/**
 * For array that looks like:
 * [0, 1, 2],
 * [3, 4, 5],
 * [6, 7, 8]
 *
 * Winning combinations are :
 * 0 - 1 - 2
 * 3 - 4 - 5
 * 6 - 7 - 8
 * 0 - 3 - 6
 * 1 - 4 - 7
 * 2 - 5 - 8
 * 0 - 4 - 8
 * 2 - 4 - 6
 * To help us, here the table of corresponding array x/y
 * 0 -> [0, 0]
 * 1 -> [0, 1]
 * 2 -> [0, 2]
 * 3 -> [1, 0]
 * 4 -> [1, 1]
 * 5 -> [1, 2]
 * 6 -> [2, 0]
 * 7 -> [2, 1]
 * 8 -> [2, 2]
 */
interface GridPosition {
  x: 0 | 1 | 2;
  y: 0 | 1 | 2;
}
type WinningPosition = Array<GridPosition>;
type GridPositionGrid = WinningPosition[];
export const calculateWinner = (grid: Grid): Player => {
  const lines: GridPositionGrid = [
    [{ x: 0, y: 0}, { x: 0, y: 1 }, { x: 0, y: 2 }], // 0 - 1 - 2
    [{ x: 1, y: 0}, { x: 1, y: 1 }, { x: 1, y: 2 }], // 3 - 4 - 5
    [{ x: 2, y: 0}, { x: 2, y: 1 }, { x: 2, y: 2 }], // 6 - 7 - 8
    [{ x: 0, y: 0}, { x: 1, y: 0 }, { x: 2, y: 0 }], // 0 - 3 - 6
    [{ x: 0, y: 1}, { x: 1, y: 1 }, { x: 2, y: 1 }], // 1 - 4 - 7
    [{ x: 0, y: 2}, { x: 1, y: 2 }, { x: 2, y: 2 }], // 2 - 5 - 8
    [{ x: 0, y: 0}, { x: 1, y: 1 }, { x: 2, y: 2 }], // 0 - 4 - 8
    [{ x: 0, y: 2}, { x: 1, y: 1 }, { x: 2, y: 0 }]  // 2 - 4 - 6
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (grid[a.x][a.y] && grid[a.x][a.y] === grid[b.x][b.y] && grid[a.x][a.y] === grid[c.x][c.y]) {
      return grid[a.x][a.y];
    }
  }
  return null;
};
