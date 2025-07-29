import React from 'react';
import background from '../assets/snakeladder.png';
console.log("Background image path:", background);

import './GameBoard.css'

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
   <div className="box" key={boxNumber}>
  {boxNumber}
</div>
);
}
}

    return box; 
  };

  return (
    <div className='biggger'>
    <div className="board"
         style={{
          backgroundImage:url(${background}),
          backgroundSize:'cover',
          MozBackgroundClip:'no-repeat',
          backgroundPosition:'center',
          height:'520px',
          width:'520px'
         }}
    >
      {generateBox()}
    </div></div>
  );
};

export default GameBoard;

