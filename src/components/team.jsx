import { useState } from 'react'
import Card from './card'

const Team = () => {

	const [team, setTeam] = useState([])

	const displayTeam = () => {
		return team.map((pokemon, index) => {
			return <Card key={index} pokemon={pokemon} />
		})
	}

	return (
		<div>
			<div className='team-container container'>
				{displayTeam()}
			</div>
		</div>




	)


}