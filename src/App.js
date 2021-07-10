import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  console.log(pokemonData);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://dev-util.edyst.com/challenge/pokemons/random"
      );
      setPokemonData(request.data);

      return request;
    }

    fetchData();
  }, []);

  return (
    <div className="app">
      {pokemonData.length > 0 && (
        <div className="card__holder">
          <Card
            backgroundColor={pokemonData[0].cardColors.bg}
            imgBackgroundColor={pokemonData[0].cardColors.imgbg}
            nextPokemon={pokemonData[1].name}
            title={pokemonData[0].name}
            about={pokemonData[0].description}
            image={pokemonData[0].sprite}
          />
          <Card
            backgroundColor={pokemonData[1].cardColors.bg}
            imgBackgroundColor={pokemonData[1].cardColors.imgbg}
            nextPokemon={pokemonData[2].name}
            title={pokemonData[1].name}
            about={pokemonData[1].description}
            image={pokemonData[1].sprite}
          />
          <Card
            backgroundColor={pokemonData[2].cardColors.bg}
            imgBackgroundColor={pokemonData[2].cardColors.imgbg}
            nextPokemon={pokemonData[0].name}
            title={pokemonData[2].name}
            about={pokemonData[2].description}
            image={pokemonData[2].sprite}
          />
        </div>
      )}
    </div>
  );
}

export default App;
