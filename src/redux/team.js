import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addToTeam,
	removePokemonFromTeam,
	selectTeam
} from './teamSlice';

const Team = () => {
	const team = useSelector(selectTeam);
	console.log(team);
	const dispatch = useDispatch();
	const [pokemonID, setPokemonID] = useState([]);

	const displayTeam = () => {
		return team.map((pokemonID, index) => (
			<li key={index}>
				{pokemonID}
				<button onClick={() => dispatch(removePokemonFromTeam(pokemonID))}>
					Remove
				</button>
			</li>
		))
	}

	return (
		<div>
			<h1>Team</h1>
			<ul>
				{displayTeam()}
			</ul>
			<input
				type="text"
				value={pokemonID}
				onChange={(e) => setPokemonID(e.target.value)}
			/>
			<button onClick={() => dispatch(addToTeam(pokemonID))}>
				Add
			</button>
		</div>
	);
};

export default Team;
