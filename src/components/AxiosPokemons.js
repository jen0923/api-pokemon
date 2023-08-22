import axios from "axios";
import React, { useState, useEffect } from "react";

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    axios
      .get( "https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        return response;
      })
      .then((response) => {
        setPokemonList(response.data.results);
        console.log(response);
      });
  }, []);

  const buttonHandler = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div style={{ width: "200px", margin: "auto" }}>
      <button className="button" onClick={buttonHandler}>Fetch Pokemon</button>
      <ul >
        {buttonClicked &&
          pokemonList.map((poke, index) => {
            return <li className="lista" key={index}>{poke.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Pokemon;