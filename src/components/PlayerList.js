import React, { useState, useEffect } from 'react';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error("Failed to fetch players:", err));
  }, []);

  return (
    <div>
      <h2>Players</h2>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} - Position:{player.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
