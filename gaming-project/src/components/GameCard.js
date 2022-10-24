import React, {useState} from "react";

function GameCard({game}) {
  const [played, setPlayed] = useState(false)
  const {name, image, review} = game

  function handleTogglePlayed(){
    setPlayed((played) => !played)
  }
  return(
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Review: {review}</p>
      {played ? (
        <button className="primary" onClick = {handleTogglePlayed}>Played</button>
      ) : (
        <button onClick = {handleTogglePlayed}>Not Played</button>
      )}
    </li>
  );
}

export default GameCard;
