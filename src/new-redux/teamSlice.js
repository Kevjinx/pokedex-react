import { createSlice } from '@reduxjs/toolkit'

const initiateState = { team: [] };

const teamSlice = createSlice({
	name: 'team',
	initiateState,
	reducers: {
		addToTeam(state, action){
			state.team.push(action.payload.pokemonID);
		},
		removePokemonFromTeam(state, action) {
			const index = state.team.indexOf(action.payload.pokemonID);
			state.team.splice(index, 1);
		}
	}
});

export const { addToTeam, removePokemonFromTeam } = teamSlice.actions;
export default teamSlice.reducer;