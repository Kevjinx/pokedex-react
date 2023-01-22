import React, {Component} from "react";
import StatBar from "./statBar.jsx";
class Stat extends Component {
	//takes obj from statObj as props from parent




	render() {
		return (
			<tr className="stat-bar">
				<th className="">{this.props.statName}</th>
				<td id="sp-attack-data">{this.props.statValue}</td>
				<StatBar statValue={this.props.statValue}/>
			</tr>
		);
	}
}

export default Stat