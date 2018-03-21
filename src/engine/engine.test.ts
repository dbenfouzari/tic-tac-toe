import { Grid, Player, calculateWinner } from './engine';
import { generateInitialGrid } from './engine';

describe('Engine', () => {
  describe('generateInitialGrid', () => {
    it('should return correct empty grid', () => {
      const result: Grid = generateInitialGrid();

      const expectedResult: Grid = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];

      expect(result).toEqual(expectedResult);
    });
  });

  describe('calculateWinner', () => {
    it('should  return `X`', () => {
      const grid: Grid = [
        ['X', 'O', 'O'],
        ['X', 'O', 'O'],
        ['X', 'X', 'X'],
      ];
      const grid2: Grid = [
        ['X', 'O', 'O'],
        ['X', 'X', 'O'],
        ['O', 'X', 'X'],
      ];

      const expectedResult: Player = 'X';

      expect(calculateWinner(grid)).toBe(expectedResult);
      expect(calculateWinner(grid2)).toBe(expectedResult);
    });

    it('should  return `O`', () => {
      const grid: Grid = [
        ['X', 'O', 'O'],
        ['X', 'O', 'O'],
        ['O', 'X', 'X'],
      ];

      const expectedResult: Player = 'O';

      expect(calculateWinner(grid)).toBe(expectedResult);
    });

    it('should  return `null`', () => {
      const grid: Grid = [
        ['X', 'O',  'O'],
        ['X', null, 'O'],
        ['O', 'X',  'X'],
      ];

      const expectedResult: Player = null;

      expect(calculateWinner(grid)).toBe(expectedResult);
    });
  });
});
