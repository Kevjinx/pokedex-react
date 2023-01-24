import Type from "./type";

const PokemonData = (props) => {

	const pokemon = props.pokemonData;

	return (
		<div className="pokedex-container-wrapper container">
			<div className="pokedex-container">
				<div className="row">
					<div className="img-container">
						<img src={pokemon.imgUrl} className="img-thumbnail" alt="placeholder" />
					</div>
					<div className="pokedex-data-container">
						<h4 id="pokemon-name">{pokemon.name}</h4>
						<h3>Pokedex Data</h3>
						<table>
							<tbody>
								<tr>
									<th id="type-header">Type</th>
									<td id="type-data">
										<Type type={pokemon.type}/>
									</td>
								</tr>
								<tr>
									<th id="height-header">Height</th>
									<td id="height-data">{pokemon.height} m</td>
								</tr>
								<tr>
									<th id="weight-header">Weight</th>
									<td id="weight-data">{pokemon.weight} kg</td>
								</tr>
								<tr>
									<th id="abilities-header">Abilities</th>
									<td id="abilities-data">{pokemon.abilities}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		);
}

export default PokemonData