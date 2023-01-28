import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addToTeam,
	removePokemonFromTeam,
	selectTeam
} from './teamSlice';

const Team = () => {
	const team = useSelector(selectTeam);
	const dispatch = useDispatch();
	const [pokemonID, setPokemonID] = useState([]);

	const handleAdd = (e) => {
		e.preventDefault();
		setPokemonID(e.target.value)
	}
	return (
		<div>
			<h1>Team</h1>
			<ul>
				{team.map((pokemonID, index) => (
					<li key={index}>
						{pokemonID}
						<button onClick={() => dispatch(removePokemonFromTeam(pokemonID))}>
							Remove
						</button>
					</li>
				))}
			</ul>
			<input
				type="text"
				value={pokemonID}
				onChange={handleAdd}
			/>
			<button onClick={() => dispatch(addToTeam(pokemonID))}>
				Add
			</button>
		</div>
	);
};

export default Team;
