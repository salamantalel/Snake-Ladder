import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import GameBoard from "./components/GameBoard";
import Dice from "./components/Dice";
import Leaderboard from "./components/Leaderboard";
import Player from "./components/Player";
import GameControls from "./components/GameControls";

                     
function App() {
 const [players, setPlayers] = useState([
  { id:1,name: "Player 1", position:0 },
  { id:2,name: "Player 2", position:0 }
 ]);

 const [ currentPlayerIndex, setCurrentPlayerIndex ] = useState(0);
 const [ gameMessage, setGameMessage ] = useState("Game started! Player 1's turn");

  return (
    <div>
      <h1 className="title">Nicolada: Snake & Ladder </h1>

      <p>{gameMessage}</p>
        <Routes>
          
          <Route path="/" element={
            <Board
            players={players}
            currentPlayerIndex={currentPlayerIndex} 
            />
          } 
      />
          <Route path="/player" 
                 element={<Player player={players[currentPlayerIndex]}
          />} 
                  />
          <Route path="/dice" element={<Dice />} />
          <Route path="/controls" 
                 element={
                 <GameControls
                   players={players}
                   setPlayers={setPlayers}
                   currentPlayerIndex={currentPlayerIndex}
                   setCurrentPlayerIndex={setCurrentPlayerIndex}
                   setGameMessage={setGameMessage}
                    />
                  }
               />
          <Route path="/leaderboard" element={<Leaderboard />} />

        </Routes>
      </div>
  );
}

export default App;
