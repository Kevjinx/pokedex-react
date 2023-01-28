import React, {Component} from "react";
import Type from "./type.jsx";
import getPokemonData from "../data/getPokemonData.mjs";
import { Link } from "react-router-dom";



//should refactor this to a functional component
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

	createTypes = () => {
		return (
			this.state.pokemon.type.map(type => {
				return (
					<Type key={type} type={type}/>
				)
			})
		)
	}

	render() {
		//workaround for when state is not set when the component is rendered
		if (!this.state.pokemon.type) {
			return null;
		}
		return (
			<div className="container-sm card">
				<div className="img-container">
					<Link to={`/pokemon/${this.state.pokemon.id}`}>
						<img className="img-thumbnail rounded pokemon-img"src={this.state.pokemon.imgUrl} alt="test"/>
					</Link>
				</div>
				<div className="container-fluid border">
					<div className="row">
						<div className="col">
							<p>n {this.state.pokemon.id}</p>
							<h4>{this.state.pokemon.name}</h4>
						</div>

						<div className="col">
							{this.createTypes()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;