import React, { useEffect, useState } from "react";
import NewGameForm from "./NewGameForm";
import GameList from "./GameList";
import Search from "./Search";

function GamePage() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3004/games")
      .then((r) => r.json())
      .then((gameArray) => {
        setGames(gameArray);
      });
  }, []);

  function handleAddGames(newGame) {
    const updatedGames = [...games, newGame];
    setGames(updatedGames);
  }
  const gamesToDisplay = games.filter((game) => {
    return game.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewGameForm onAddGame={handleAddGames} />
      <Search searchTerm={searchTerm} onSearchChange={setSearch} />
      <GameList games={gamesToDisplay} />
    </main>
  );
}

export default GamePage;
