import React from 'react';
import "./GameBoard.css";

const GameBoard = () => {
  const generateBox = () => {
    const box = [];

    for (let row = 9; row >= 0; row--) {
      for (let col = 0; col < 10; col++) {
        let boxNumber;
        if (row % 2 === 0) {
          
          boxNumber = row * 10 + col + 1;
        } else {
          
          boxNumber = row * 10 + (9 - col) + 1;
        }

        box.push(
          <div key={boxNumber} className="box">
            {boxNumber}
          </div>
        );
      }
    }

    return box;
  };

  return (
    <div className="board">
      {generateBox()}
    </div>
  );
};

export default GameBoard;
