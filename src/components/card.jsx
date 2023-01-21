import React, {Component} from "react";
import Type from "./type.jsx";
import getPokemonData from "../data/getPokemonData.mjs";


class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon: {}
		}
	}

	async componentDidMount() {
		const pokemon = await getPokemonData(this.props.pokemon)
		this.setState({pokemon})
	}

	createTypes = () => this.state.pokemon.type.map(type => <Type key={type} type={type}/>)

	render() {
		if (!this.state.pokemon.type) {
			return null;
		}
		return (
			<div className="container-sm card">
				<div className="img-container">
					<img className="img-thumbnail rounded pokemon-img"src={this.state.pokemon.imgUrl} alt="test"/>
				</div>
				<div>
					<span>n {this.state.pokemon.id}</span>
					{this.createTypes()}
				</div>
				<h2>{this.state.pokemon.name}</h2>
			</div>
		);
	}
}

export default Card;