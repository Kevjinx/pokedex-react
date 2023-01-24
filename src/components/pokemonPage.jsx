import React, {Component} from "react";
import Stats from "./stats.jsx";
import PokemonData from "./pokemonData.jsx";
import getPokemonData from "../data/getPokemonData.mjs";

class PokemonPage extends Component {

	//takes in single pokemon data object, passes part of the data to children components

	pokemonData = getPokemonData()

	testData = {
		"type": [
			"electric"
		],
		"imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
		"id": 25,
		"name": "pikachu",
		"baseExp": 112,
		"height": 4,
		"weight": 60,
		"abilities": "static",
		"statsObj": {
			"hp": 35,
			"attack": 55,
			"defense": 40,
			"special-attack": 50,
			"special-defense": 50,
			"speed": 90
		}
	}

	render() {
		return (
			<div>
				<Stats statsObj={this.testData["statsObj"]}/>
				<PokemonData pokemonData={this.testData}/>
			</div>
		);
	}
}

export default PokemonPage