import fetch from "node-fetch";

class PokemonUtils {
	constructor(name) {
		this.name = name.toLowerCase(); //api url is case sensitive
		this.data = {}
		this.parseData()
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
		const abilities = data.abilities.map(ability => ability.ability.name)
		const {id, name, base_experience, height, weight} = data
		const stats = data.stats.map(stat => {
			return {
				[stat.stat.name]: stat.base_stat
			}
		})

		this.data = {
			id,
			name: this.stringCap(name),
			baseExperience: base_experience,
			height,
			weight,
			abilities: this.arrayCap(abilities),
			stats,
		}
	}

}

const pokemonUtils = new PokemonUtils('pikachu')

const test = async () => {
	await pokemonUtils.parseData()
	console.log(pokemonUtils.data)
}

test()