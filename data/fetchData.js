export const fetchData = (search) => {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
		.then(response => response.json())
		.then(data => {
			return data
		})
}
