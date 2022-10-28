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
    <div className="card">
    <img src={image} className="card-img" alt=""/>
    <div className="card-body">
        <h1 className="card-title">{name}</h1>
        <p className="card-sub-title">Review: {review}</p>
        <p className="card-info">{description}</p>

        {played ? (
        <button className="primary" onClick = {handleTogglePlayed}>Played</button>
      ) : (
        <button onClick = {handleTogglePlayed}>Not Played</button>
      )}
    </div>
</div>
  );
}

export default GameCard;
