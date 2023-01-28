const actions = require('./actionTypes');

const pokemonAddedToTeam = description => ({
	type: actions.ADD_TO_TEAM,
	payload: {description}
})

const pokemonRemovedFromTeam = id => ({
	type: actions.REMOVE_FROM_TEAM,
	payload: {id}
})

module.exports = { pokemonAddedToTeam, pokemonRemovedFromTeam }