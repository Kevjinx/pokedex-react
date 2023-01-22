import React, {Component} from "react";

class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ""
		}
	}

	handleChange = (event) => {
		this.setState({search: event.target.value})
	}

	render() {
		return (
			<div className="search-box">
				<input
					className="form-control"
					type="text"
					placeholder="Search"
					value={this.state.search}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default SearchBox