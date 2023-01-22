import React, {Component} from "react";


class PokemonData extends Component {

	render() {
		return (
			<div className="pokedex-container-wrapper">
				<div className="pokedex-container">
					<div className="row">
						<div className="img-container col-4">
							<img id="image" src="https://img.pokemondb.net/artwork/large/meowscarada.jpg" className="img-thumbnail" alt="placeholder" />
						</div>
						<div className="pokedex-data-container col-4">
							<h4 id="pokemon-name">Pokemon Name</h4>
							<h3>Pokedex Data</h3>
							<table>
								<tbody>
									<tr>
										<th id="type-header">Type</th>
										<td id="type-data">Grass, Dark</td>
									</tr>
									<tr>
										<th id="height-header">Height</th>
										<td id="height-data">1.5 m</td>
									</tr>
									<tr>
										<th id="weight-header">Weight</th>
										<td id="weight-data">31.2 kg</td>
									</tr>
									<tr>
										<th id="abilities-header">Abilities</th>
										<td id="abilities-data">Overgrow</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PokemonData