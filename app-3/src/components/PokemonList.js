import React from "react";
import useAxios from "../hooks/useAxios.js";
import { Link } from "react-router-dom";

const PokemonList = () => {
  //Using custom hook
  const [pokemon, setPokemon] = useAxios(
    "https://pokeapi.co/api/v2/pokemon",
    "results"
  );

  return (
    <div>
      <h1>PokemonList</h1>
      {pokemon.map((poke, index) => {
        return (
          <div key={index}>
            <Link to={`/pokemon/${poke.name}`}>{poke.name}</Link>
          </div>
        );
      })}
    </div>
  );
};
export default PokemonList;
