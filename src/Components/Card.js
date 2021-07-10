import React from "react";

import "./Card.css";

function Card({
  nextPokemon,
  title,
  about,
  backgroundColor,
  imgBackgroundColor,
  image,
}) {
  return (
    <div className="card" style={{ backgroundColor: `${backgroundColor}` }}>
      <div className="topleft">
        <h1>{nextPokemon}</h1>
      </div>
      <div className="top right"></div>

      <h1>{title}</h1>
      <p>{about}</p>

      <div
        className="pokemon__image"
        style={{ backgroundColor: `${imgBackgroundColor}` }}
      >
        <img src={image} alt="pokemon" />
      </div>
    </div>
  );
}

export default Card;
