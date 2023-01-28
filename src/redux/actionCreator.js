import actions from './actionTypes';

export const pokemonAddedToTeam = pokemonID => ({
	type: actions.ADD_POKEMON_TO_TEAM,
	payload: {pokemonID}
})

export const pokemonRemovedFromTeam = pokemonID => ({
	type: actions.REMOVE_POKEMON_FROM_TEAM,
	payload: {pokemonID}
})
