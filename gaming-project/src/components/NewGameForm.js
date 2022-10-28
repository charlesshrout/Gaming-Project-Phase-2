import React, {useState} from "react";

function NewGameForm({ onAddGame }) {
  const [name, setName] = useState("")
  const [review, setReview] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/games",{
    method: "POST",
    headers:{"Content-Type": "application/json",},
    body: JSON.stringify({
      name: name,
      image: image,
      review: review,
      description: description
    }),
    })
    .then((r) => r.json())
    .then((newGame) => onAddGame(newGame));
    e.reset(onAddGame)
  }

  return (
    <div className="new-plant-form">
      <h2>Write a Review!</h2>
      <form onSubmit= {handleSubmit}>
        <input type="text" name="name" placeholder="Game name" value= {name} onChange= {(e)=> setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value= {image} onChange= {(e)=> setImage(e.target.value)}/>
        <input type="number" name="review" step="0.1" placeholder="Review" value= {review} onChange= {(e) => setReview(e.target.value)}/>
        <input type="text" name="description" placeholder="Description" value= {description} onChange= {(e)=> setDescription(e.target.value)}/>
        <button className= "add-game" type="submit">Add Game</button>
      </form>
    </div>
  );
}

export default NewGameForm;