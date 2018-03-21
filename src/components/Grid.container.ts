import { compose, withState, withHandlers, withProps } from 'recompose';
import { generateInitialGrid, Grid, Player, calculateWinner } from '../engine';
import GridElm, { GridProps } from './Grid';

export interface RecomposeProps {
  setGrid: (grid: Grid) => void;
  grid: Grid;
  onClick: (x: number) => (y: number) => () => void;
  currentPlayer: Player;
  setCurrentPlayer: (player: Player) => void;
  winner: Player;
  onReset: () => void;
}

const onClick = ({
  setGrid, grid, setCurrentPlayer, currentPlayer
}: RecomposeProps) => (x: number) => (y: number) => (event: Event) => {
  const nextGrid = [...grid];

  nextGrid[x][y] = currentPlayer;

  setGrid(nextGrid);
  setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
};

const onReset = ({ setGrid }: RecomposeProps) => () => {
  setGrid(generateInitialGrid());
};

export default compose<GridProps, {}>(
  withState('grid', 'setGrid', generateInitialGrid()),
  withState('currentPlayer', 'setCurrentPlayer', 'X'),
  withProps(({ grid }) => ({
    winner: calculateWinner(grid)
  })),
  withHandlers({ onClick, onReset })
)(GridElm);
