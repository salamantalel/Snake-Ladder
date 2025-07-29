import React from 'react';
import GameBoard from './GameBoard';
import Dice from './Dice';
import './App.css';

const App = () => {
  return (
    <div className='wholee'>
      <h1 className='textt'> Snakes and Ladders</h1>
      <GameBoard />
      <Dice />
    </div>
  );
};



export default App;

