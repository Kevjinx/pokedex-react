import React, {Component} from "react";

class StatBar extends Component {
	//takes obj from statObj as props from parent

	render() {
		return (
			<td className="progress-bar">
				<div className="progress-bar-fill" style={{width: this.props.statValue + "%"}}>test</div>
			</td>
		);
	}
}

export default StatBar