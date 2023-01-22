import React, {Component} from "react";
import StatBar from "./statBar.jsx";
class Stat extends Component {
	//takes obj from statObj as props from parent




	render() {
		return (
			<tr className="stat">
				<th className="stat-name">{this.props.statName}</th>
				<td className="stat-value">{this.props.statValue}</td>
				<StatBar statValue={this.props.statValue}/>
			</tr>
		);
	}
}

export default Stat