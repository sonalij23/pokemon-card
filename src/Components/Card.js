import React from "react";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

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
      <div className="top">
        <div className="top__left">
          <h6>{nextPokemon}</h6>
        </div>
        <div className="top__icon">
          <TrendingFlatIcon />
        </div>
      </div>

      <div className="bg__rotate">
        <div className="content">
          <h1>{title}</h1>
          <p>{about}</p>
        </div>
      </div>

      <div
        className="pokemon__imagebg"
        style={{ backgroundColor: `${imgBackgroundColor}` }}
      >
        <img src={image} alt="pokemon" />
      </div>
    </div>
  );
}

export default Card;
