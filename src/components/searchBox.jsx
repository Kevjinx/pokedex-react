import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {

	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		const input = document.querySelector("input");
		if (input) {
			setSearchValue(input.value);
		}
	}, [searchValue])

	const handleChange = (e) => setSearchValue(e.target.value);
	const handleSubmit = (e) => {
		if (e.key === 'Enter') {
			navigate(`/pokemon/${searchValue}`);
		}
	}
	const navigate = useNavigate();


	return (
		<div className="search-box">
			<input
				className="form-control"
				type="text"
				placeholder="Search"
				onChange={handleChange}
				value={searchValue}
				onKeyUp={handleSubmit}
			/>
			<button
				className="btn btn-primary"
				onClick={() => navigate(`/pokemon/${searchValue}`)}
			>
				Search
			</button>
		</div>
	);

}

export default SearchBox