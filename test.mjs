import fetch from "node-fetch"

async function getRandomPokemonList() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10"
    const response = await fetch(url)
    const data = await response.json()
    return data.results.map(pokemon => pokemon.name)
}

getRandomPokemonList().then(console.log)