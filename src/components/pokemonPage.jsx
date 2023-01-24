import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Stats from "./stats.jsx";
import PokemonData from "./pokemonData.jsx";
import getPokemonData from "../data/getPokemonData.mjs";




const PokemonPage = props => {

	const { pokemonId }	= useParams();
	const [pokemon, setPokemon] = useState({});
	const [pokemonLoaded, setPokemonLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			setPokemonLoaded(false);
			let data = await getPokemonData(pokemonId);
			setPokemon(data);
			setPokemonLoaded(true);
		})();
	},[pokemonId]);


	return (
		<div>
			{pokemonLoaded ? (
				<div>
					<PokemonData pokemonData={pokemon}/>
					<Stats statsObj={pokemon.statsObj}/>
				</div>
			) : (
				<p>No pokemon found, please try again</p>
			)}
		</div>
	);

}

export default PokemonPage