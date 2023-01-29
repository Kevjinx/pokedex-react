import React, { useState } from "react";
import Card from "./card.jsx";

const Cards = () => {

	const testPokemons = [
		'bulbasaur', 'ivysaur',
		'venusaur', 'charmander',
		'charmeleon', 'charizard',
		'squirtle', 'wartortle',
		'blastoise', 'caterpie'
	]

	const createCards = () => {
		return testPokemons.map(pokemon => {
			return (
				<div className="col-sm-4" key={testPokemons.indexOf(pokemon)}>
					<Card pokemon={pokemon} />
				</div>
			)
		})
	}

	return (
		<div className="pokemon-container container border">
			<div className="row">
				{createCards()}
			</div>
		</div>
	);
}

export default Cards;
