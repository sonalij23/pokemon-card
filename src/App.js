import React, { useEffect } from "react";
import Card from "./Components/Card";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://dev-util.edyst.com/challenge/pokemons/random"
      );
      console.log(request.data);

      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="card__holder">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
