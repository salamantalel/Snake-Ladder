import React from 'react';
import './Dice.css';

const Dice = ({ setDiceValue }) => {
  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceValue(result); 
  };

  return (
    <div className='dicc'>
      <button onClick={rollDice}>🎲 </button>
    </div>
  );
};

export default Dice;
