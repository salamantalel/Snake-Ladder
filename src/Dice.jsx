import React, { useState } from 'react';

const Dice = () => {
  const [diceNumber, setDiceNumber] = useState(null);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(result);
  };

  return (
    <div >
      <button onClick={rollDice} >Roll Dice</button>
      {diceNumber && (
        <div >
          {diceNumber}
        </div>
      )}
    </div>
  );
};
export default Dice;
