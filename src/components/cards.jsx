import React, {Component} from "react";
import Card from "./card.jsx";

class Cards extends Component {

	testPokemons = [
		'bulbasaur',  'ivysaur',
		'venusaur',   'charmander',
		'charmeleon', 'charizard',
		'squirtle',   'wartortle',
		'blastoise',  'caterpie'
	]


	createCards = () => {
		this.testPokemons.map(pokemon => {
			return <Card key={this.testPokemons.indexOf(pokemon)}pokemon={pokemon}/>
		})
	}

	render() {
		return (
			<div className="cards-container">
				<Card key="1" pokemon='bulbasaur'/>
				<Card key="2" pokemon='venusaur'/>
				<Card key="3" pokemon='charmeleon'/>
				<Card key="4" pokemon='squirtle'/>
				<Card key="5" pokemon='blastoise'/>
				<Card key="6" pokemon='ivysaur'/>
			</div>
		);
	}
}

export default Cards