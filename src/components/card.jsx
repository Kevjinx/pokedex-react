import React, {Component} from "react";
import Type from "./type.jsx";
class Card extends Component {


	state = {
		pokemon: {
			type: ["electric", "test"],
			imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
			id: 25,
			name: "pikachu",
			baseExp: 112,
			height: 4,
			weight: 60,
			abilities: "static",
			statsObj: {
					hp: 35,
					attack: 55,
					defense: 40,
					"special-attack": 50,
					"special-defense": 50,
					speed: 90
			}
	}	}

	render() {
		return (
			<div className="card">
				<img src={this.state.pokemon.imgUrl} alt="test"/>
				<p>n {this.state.pokemon.id}</p>
				<h2>{this.state.pokemon.name}</h2>
				<Type type={this.state.pokemon.type[0]}/>
			</div>
		);
	}
}

export default Card;