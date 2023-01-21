import fetch from "node-fetch";
import fs from "fs";


const stringCap = string => string.charAt(0).toUpperCase() + string.slice(1)
const arrayCap = array => array.map(item => stringCap(item))

const fetchData = async (pokemon) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
	console.log('fetching data from url: ', url);
	const response = await fetch(url)
	const data = await response.json()
	return data
}

const parseData = async (pokemon) => {
	const data = await fetchData(pokemon)
	const abilities = data.abilities.reduce(ability => ability.ability.name)

	const statsObj = {}
	for(let i = 0; i < data.stats.length; i++) {
		statsObj[data.stats[i].stat.name] = data.stats[i].base_stat
	}

	// const statsObj = data.stats.reduce((obj, stat) => {
	// 	obj[stat.stat.name] = stat.base_stat
	// 	return obj
	// })
	const {id, name, base_experience, height, weight} = data
	const result =  {
		id,
		name,
		baseExp: base_experience,
		height,
		weight,
		abilities,
		statsObj
	}
	return result
}

const getPokemonData = async (name) => {
	const data = await parseData(name)
	return data
}

// const data = await fetchData('pikachu')
// const testData = await getPokemonData('pikachu')
// console.log(data)

// //create a json file from the result of fetchdata('pikachu)

// fs.writeFile('pikachu.json', JSON.stringify(data), (err) => {
// 	if (err) throw err;
// 	console.log('The file has been saved!');
// })


// fs.writeFile('pikachuData.json', JSON.stringify(testData), (err) => {
// 	if (err) throw err;
// 	console.log('The file has been saved!');
// })


export default getPokemonData
