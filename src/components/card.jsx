import React, {Component} from "react";
import getPokemonData from "../data/getPokemonData.mjs";

//each Card will create a new instance of PokemonUtils and
class Card extends Component {

	testData = {
		id: 25,
		name: 'pikachu',
		baseExp: 112,
		height: 4,
		weight: 60,
		abilities: 'static',
		statsObj: {
			base_stat: 35,
			effort: 0,
			stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
			attack: 55,
			defense: 40,
			'special-attack': 50,
			'special-defense': 50,
			speed: 90
		}
	}


	render() {
		return (
			<div className="card">
				{this.testData}
			</div>
		);
	}
}

export default Card;