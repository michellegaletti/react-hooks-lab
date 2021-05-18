import React from "react";
import useAxios from "../hooks/useAxios";

const ListPoke = () => {
  //Using custom hook
  const [pokemon, setPokemon] = useAxios(
    "https://pokeapi.co/api/v2/pokemon",
    "results"
  );

  console.log(pokemon);
  return (
    <div>
      <h1>List</h1>
      {pokemon.map((poke, index) => {
        return <h2 key={index}>{poke.name}</h2>;
      })}
    </div>
  );
};
export default ListPoke;
