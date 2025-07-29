import React, { useState } from 'react';
import './Dice.css'

const Dice = () => {
  const [diceNumber, setDiceNumber] = useState(null);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(result);
  };

  return (
    <div className='dicc'>
      <button onClick={rollDice} >Roll Dice</button>
      {diceNumber && (
        <div className='numbtn' >
          {diceNumber}
        </div>
      )}
    </div>
  );
};
export default Dice;
