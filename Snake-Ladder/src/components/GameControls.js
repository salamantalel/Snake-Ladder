import React from "react";

const snakes = {
  16: 6,
  48: 30,
  62: 19,
  64: 60,
  79: 19,
  93: 68,
  95: 24,
  98: 78,
};

const ladders = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100,
};

function GameControls({
  players,
  setPlayers,
  currentPlayerIndex,
  setCurrentPlayerIndex,
  setGameMessage,
}) {
  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    let currentPlayer = players[currentPlayerIndex];
    let newPos = currentPlayer.position + roll;

    if (newPos > 100) newPos = currentPlayer.position;

    if (ladders[newPos]) {
      setGameMessage(
        `${currentPlayer.name} rolled a ${roll}, climbed a ladder to ${ladders[newPos]}!`
      );
      newPos = ladders[newPos];
    } else if (snakes[newPos]) {
      setGameMessage(
        `${currentPlayer.name} rolled a ${roll}, got bitten by a snake and slid to ${snakes[newPos]}!`
      );
      newPos = snakes[newPos];
    } else {
      setGameMessage(`${currentPlayer.name} rolled a ${roll} and moved to ${newPos}.`);
    }

    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex] = {
      ...currentPlayer,
      position: newPos,
    };
    setPlayers(updatedPlayers);

    if (newPos === 100) {
      setGameMessage(`${currentPlayer.name} wins the game! 🎉`);
      return;
    }

    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
  };

  return (
    <div className="game-controls">
      <h2>Game Controls</h2>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default GameControls;
