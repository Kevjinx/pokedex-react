import { createSlice } from '@reduxjs/toolkit'

const initialState = { lineup: [1] }

const teamSlice = createSlice({
	name: 'team',
	initialState,
	reducers: {
		addToTeam(state, action){
			console.log(action)
			state.lineup.push(action.payload.pokemonID);
		},
		removePokemonFromTeam(state, action) {
			const index = state.lineup.indexOf(action.payload.pokemonID);
			state.lineup.splice(index, 1);
		}
	}
});


export const selectTeam = state => state.team.lineup;
export const { addToTeam, removePokemonFromTeam } = teamSlice.actions;

export default teamSlice.reducer;