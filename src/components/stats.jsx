import React, {Component} from "react";
import Stat from "./stat.jsx";

class Stats extends Component {
	//takes statsObj as props from parent

	createStat = (statObj) => {
		for (const stat in statObj) {
			return (
				<Stat
					statName={stat}
					statValue={statObj[stat]}
				/>
			)
		}
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
