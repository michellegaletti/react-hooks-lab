import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  const [pokeInfo, setPokeInfo] = useState(null);
  const { name } = props.match.params;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setPokeInfo(res.data))
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <div>
      <Link to="/" className="backBtn">
        Back
      </Link>
      {pokeInfo ? (
        <div>
          <h1>{pokeInfo.name}</h1>
          <img alt={pokeInfo.name} src={pokeInfo.sprites.front_default} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Pokemon;
