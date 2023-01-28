const { produce } = require('immer');
const actions = require('./actionTypes');

const addToTeam = (state, action) => {
	return produce(state, draftState => {
		draftState.push(action.payload.pokemonID);
	})
}

const removeFromTeam = (state, action) => {
	state.filter(id => id !== action.payload.pokemonID);
}

const reducer = (state = [], action) => {
	switch (action.type) {
		case actions.ADD_TO_TEAM:
			return addToTeam(state, action);
		case actions.REMOVE_FROM_TEAM:
			return removeFromTeam(state, action);
		default:
			return state;
	}
}

module.exports = reducer;