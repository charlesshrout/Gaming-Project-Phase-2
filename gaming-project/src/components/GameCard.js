import React, {useState, useSyncExternalStore} from "react";

function GameCard({game}) {
  const [played, setPlayed] = useState(false)
  const [showFront, setShowFront] = useState(true)
  const {name, image, review, description} = game

  function handleClick(){
    setShowFront((showFront) => !showFront)
  }
  function handleTogglePlayed(){
    setPlayed((played) => !played)
  }
  return(
    <li className="card">
        <div onClick= {handleClick}>
        {showFront ? 
        (<img src={image} alt={name}/>) : (
            <p className= "description">{description}</p>
        )}
      </div>
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
