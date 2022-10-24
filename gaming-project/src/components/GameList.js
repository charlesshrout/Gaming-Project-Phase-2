import React from "react";
import GameCard from "./GameCard";

function GameList({games}) {
 const cards = games.map((game) => {
  return(
  <GameCard key= {game.id} 
    game = {game}
  />)
 })
  return (
    <ul className="cards">{cards}</ul>
  );
}

export default GameList;
