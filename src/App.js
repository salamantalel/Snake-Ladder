import React from "react";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";


import Board from "./components/Board";
import Dice from "./components/Dice";
import Leaderboard from "./components/Leaderboard";
import Player from "./components/Player";
import GameControls from "./components/GameControls";


function App() {
  return (
    <Router>
    <div>
      <h1>Welcome to Nicolada:Snake & Ladder</h1>
        <Routes>
          
          <Route path="/" element={<Board />} />
          <Route path="/player" element={<Player />} />
          <Route path="/dice" element={<Dice />} />
          <Route path="/controls" element={<GameControls />} />
          <Route path="/leaderboard" element={<Leaderboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
