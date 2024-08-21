import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { fisherYatesShuffle } from "./utilities";
function Pokemon () {
    const totalPokemon = 151// Original Pokemon
    const [pokemon, setPokemon] = useState([])

    async function getPokemon(id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const {name, sprite} = response
        const data = {
            name: name,
            image: sprite
        }
        return data
    }


    async function getRandomPokemon(amount) {
        const pokemonIds = new Set()
    
        while (pokemonIds.size < amount) {
            const randomId = Math.floor(Math.random() * totalPokemon) + 1
            pokemonIds.add(randomId)
        }

        const pokemonCards = await Promise.all([...pokemonIds].map(id => getPokemon(id)))
    
        return pokemonCards
    }

    function shufflePokemon() {
        const shuffledPokemon = fisherYatesShuffle(pokemon.map(card => ({...card, id: uuidv4()})))
        setPokemon(shuffledPokemon)
    }

    return { pokemon, setPokemon, getRandomPokemon, shufflePokemon}


}

export default Pokemon