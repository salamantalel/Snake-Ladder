import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ players }) => {
  const sortedPlayers = [...players].sort((a, b) => b.position - a.position);

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>
      <ul>
        {sortedPlayers.map((player, index) => (
          <li key={player.id}>
            <strong>{index + 1}. {player.name}</strong> — Position: {player.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
