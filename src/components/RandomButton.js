import React, {useState} from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({onAddPlaneteer}) {
  // const [name, setName] = useState('')
  // const [fromUSA, setFromUSA] = useState('')
  // const [born, setBorn] = useState('')
  // const [bio, setBio] = useState('')
  // const [quote, setQuote] = useState('')
  // const [pictureUrl, setPictureUrl] = useState('')
  // const [twitter, setTwitter] = useState('')

  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();

    

    fetch('http://localhost:8003/planeteers', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": randomPlaneteer.name,
        "fromUSA": randomPlaneteer.fromUSA,
        "born": randomPlaneteer.born,
        "bio": randomPlaneteer.bio,
        "quote": randomPlaneteer.quote,
        "pictureUrl": randomPlaneteer.pictureUrl,
        "twitter": randomPlaneteer.twitter,
      })
    })
    .then(r => r.json())
    .then(newPlaneteer => onAddPlaneteer(newPlaneteer))
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
