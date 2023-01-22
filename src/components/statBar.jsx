import React, {Component} from "react";

class StatBar extends Component {
	//take statValue as props from parent to set width of progress bar

	render() {
		return (
			<td className="progress">
				<div
					className="progress-bar"
					role="progressbar"
					style={{width: this.props.statValue + "%"}}>
				</div>
			</td>
		);
	}
}

export default StatBar
