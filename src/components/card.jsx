import React, { useState, useEffect } from "react";
import Type from "./type.jsx";
import getPokemonData from "../data/getPokemonData.mjs";
import { Link } from "react-router-dom";

const Card = (props) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getPokemonData(props.pokemon);
      setPokemon(pokemonData);
    }
    fetchData();
  }, [props.pokemon]);

  if (!pokemon.type) {
    return null;
  }

  return (
    <div className="container-sm card">
      <div className="img-container">
        <Link to={`/pokemon/${pokemon.id}`}>
          <img className="img-thumbnail rounded pokemon-img"src={pokemon.imgUrl} alt="test"/>
        </Link>
      </div>
      <div className="container-fluid border">
        <div className="row">
          <div className="col">
            <p>n {pokemon.id}</p>
            <h4>{pokemon.name}</h4>
          </div>

          <div className="col">
            {pokemon.type.map(type => (
              <Type key={type} type={type}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
