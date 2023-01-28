import { produce } from 'immer';
import * as actions from './actionTypes';


const addToTeam = (state, action) => {
	return produce(state, draftState => {
		draftState.push(action.payload.pokemonID);
	})
}

const removeFromTeam = (state, action) => {
	const index = state.indexOf(action.payload.pokemonID);
	return produce(state, draftState => {
		draftState.splice(index, 1);
	})
}

const reducer = (state = [], action) => {
	switch (action.type) {
		case actions.ADD_POKEMON_TO_TEAM:
			return addToTeam(state, action);
		case actions.REMOVE_POKEMON_FROM_TEAM:
			return removeFromTeam(state, action);
		default:
			return state;
	}
}

export default reducer