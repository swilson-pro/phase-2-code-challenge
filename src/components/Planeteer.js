import React, {useState} from "react";

function Planeteer({planeteer}) {
  const {id, name, fromUSA, born, bio, quote, pictureUrl, twitter} = planeteer

  const [isBioDisplayed, setIsBioDisplayed] = useState(true)

  const handleClick = () => {
    setIsBioDisplayed(!isBioDisplayed)
  }
  
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={pictureUrl}
          alt={name}
          className="card__image"
          onClick={handleClick}
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{isBioDisplayed ? bio : quote}</p>
          <div className="card__detail">
            <br />
            <p>{twitter}</p>
            <br />
            <p>age: {new Date().getFullYear()-born}</p>
            <br />
            <p>
              {
                fromUSA ? 'USA-based' : 'working overseas'
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
