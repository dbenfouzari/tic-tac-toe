import * as React from 'react';
import { RecomposeProps } from './Grid.container';
import { Player, Grid } from '../engine';

type Props = {
  style?: Object;
};

const Row = (props: Props) => <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }} {...props} />;
// tslint:disable-next-line:no-any
const Col = (props: Props & { children: Player, onClick: () => void }) => (
  <div
    style={{
      ...props.style,
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
      border: '1px solid #999',
      fontSize: 36,
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold'
    }}
    onClick={props.onClick}
  >
    {props.children}
  </div>
);

export interface GridProps {
  grid: Grid;
}

const Grid = ({ grid, onClick, winner, currentPlayer, onReset }: GridProps & RecomposeProps) => (
  <div>
    {winner ? (
      <span>Winner : {winner}</span>
    ) : (
      <span>Current player : {currentPlayer}</span>
    )}

    <button onClick={onReset}>Reset</button>

    { grid.map((x, xi) => (
      <Row key={xi}>
        { x.map((y, yi) => (
          <Col key={yi} onClick={winner ? () => null : onClick(xi)(yi)}>{y}</Col>
        )) }
      </Row>
    )) }
  </div>
);

export default Grid;
