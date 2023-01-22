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


// how come createCards() when called in render() returns undefined?

createCards = () => {
	return this.testPokemons.map(pokemon => {
		return (
			<div className="col-sm-4" key={this.testPokemons.indexOf(pokemon)}>
				<Card pokemon={pokemon}/>
			</div>
		)
	})
}


render() {
	return (
		<div className="container">
			<div className="row">
				{this.createCards()}
			</div>
		</div>
	);
}
}

export default Cards