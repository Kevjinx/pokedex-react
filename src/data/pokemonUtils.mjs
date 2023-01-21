import fetch from "node-fetch";

class GetPokemon {
	constructor(name) {
		this.name = name.toLowerCase(); //api url is case sensitive
		this.data = {}
	}

	stringCap = string => string.charAt(0).toUpperCase() + string.slice(1)
	arrayCap = array => array.map(item => this.stringCap(item))

	async fetchData (name) {
		const url = `https://pokeapi.co/api/v2/pokemon/${name}`
		console.log('fetching data from url: ', url);
		const response = await fetch(url)
		const data = await response.json()
		return data
	}

	async parseData () {
		const data = await this.fetchData(this.name)
		const abilities = data.abilities.reduce(ability => ability.ability.name)
		const statsObj = data.stats.reduce((obj, stat) => {
			obj[stat.stat.name] = stat.base_stat
			return obj
		})
		const {id, name, base_experience, height, weight} = data
		this.data = {
			id,
			name,
			baseExp: base_experience,
			height,
			weight,
			abilities,
			statsObj
		}
	}
}


export default GetPokemon