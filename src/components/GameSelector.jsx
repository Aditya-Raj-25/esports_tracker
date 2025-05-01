import React, { useState } from 'react';
import { Badge } from './ui/Badge';

const GameSelector = () => {
  const [games, setGames] = useState([
    { id: 'valorant', name: 'Valorant', color: 'from-red-500 to-red-700', active: true, link: "https://www.youtube.com/@valorant_americas" },
    { id: 'cs2', name: 'CS2', color: 'from-yellow-500 to-yellow-700', active: false, link: "https://www.youtube.com/@ESLCSHighlights" },
    { id: 'lol', name: 'League of Legends', color: 'from-blue-500 to-blue-700', active: false, link: "https://www.youtube.com/@lolesports" },
    { id: 'dota2', name: 'Dota 2', color: 'from-red-600 to-red-800', active: false, link: "https://www.youtube.com/noobfromua" },
    { id: 'rl', name: 'Rocket League', color: 'from-blue-600 to-blue-800', active: false, link: "https://www.youtube.com/@rlesports" },
  ]);

  const toggleGame = (id) => {
    setGames(games.map(game =>
      game.id === id ? { ...game, active: !game.active } : game
    ));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {games.map(game => (
        <a href={game.link} key={game.id}>
          <button

            onClick={() => toggleGame(game.id)}
            className={`
            relative group px-4 py-2 rounded-full 
            transition-all duration-200 
            ${game.active
                ? `bg-gradient-to-r ${game.color} text-white`
                : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }
          `}
          >
            <span className="relative z-10">{game.name}</span>
            {game.active && (
              <Badge
                variant="default"
                className="absolute -top-2 -right-2 bg-white text-gray-900"
              >
                Live
              </Badge>
            )}
          </button>
        </a>
      ))}
    </div>
  );
};

export default GameSelector;