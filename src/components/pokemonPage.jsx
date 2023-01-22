import React, {Component} from "react";
import Stats from "./stats.jsx";

class PokemonPage extends Component {

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
			</div>
		);
	}
}

export default PokemonPage