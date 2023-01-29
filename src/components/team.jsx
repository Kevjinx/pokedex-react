import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	removePokemonFromTeam,
	selectTeam
} from '../redux/teamSlice';

const Team = () => {
	const [sprites, setSprites] = useState([]);
	const team = useSelector(selectTeam);
	const dispatch = useDispatch();

	const getSprites = async () => {
		const spriteImgsArray = await Promise.all(team.map(async (pokemonID) => {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
			const spriteImg = await fetch(url)
				.then((response) => response.json())
				.then((data) => data.sprites.front_default);
			return { pokemonID, spriteImg };
		}));
		setSprites(spriteImgsArray);
	};

	useEffect(() => {
		getSprites();
	}, [team]);

	const handleRemoveFromTeam = (pokemonID) => dispatch(removePokemonFromTeam(pokemonID));

	return (
		<div>
			<h1>Team</h1>
			<ul>
				{sprites.map((sprite, index) => (
					<li key={index}>
						<img onClick={() => handleRemoveFromTeam(sprite.pokemonID)} src={sprite.spriteImg} alt="pokemon" />
						<button onClick={() => handleRemoveFromTeam(sprite.pokemonID)}>Remove</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Team;
