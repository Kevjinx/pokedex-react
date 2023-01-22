import React, {Component} from "react";
import Stat from "./stat.jsx";

class Stats extends Component {

	//takes statsObj as props from parent and create a list of stat row components
	createStat = (statObj) => {
		let statList = []
		for (const stat in statObj) {
			const statComponent = (
				<Stat
				statName={stat}
				statValue={statObj[stat]}
				/>
			)
			statList.push(statComponent)
		}
		return statList
	}

	render() {
		return (
			<div>
				<table>
					<tbody>
						{this.createStat(this.props.statsObj)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Stats
