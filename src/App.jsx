import React from 'react';
import GameBoard from './GameBoard';
import Dice from './Dice';

const App = () => {
  return (
    <div >
      <h1> Snakes and Ladders</h1>
      <GameBoard />
      <Dice />
    </div>
  );
};



export default App;

