// Pokemon.js
import { v4 as uuidv4 } from "uuid";
import { fisherYatesShuffle } from "./utilities";

export async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return {
        name: data.name,
        image: data.sprites.front_default
    };
}

export async function getRandomPokemon(amount, totalPokemon = 151) {
    const pokemonIds = new Set();
    
    while (pokemonIds.size < amount) {
        const randomId = Math.floor(Math.random() * totalPokemon) + 1;
        pokemonIds.add(randomId);
    }

    const pokemonCards = await Promise.all([...pokemonIds].map(id => getPokemon(id)));
    return pokemonCards;
}

export function shufflePokemon(cards, initial=false) {
    return fisherYatesShuffle(cards.map(card => (initial ? { ...card, id: uuidv4(), clicked: false } : {...card})));
}


export function determinePokemonCount(difficulty) {
    switch (difficulty) {
      case 'Easy':
        return 6;  // Fewer Pokémon for easy difficulty
      case 'Medium':
        return 12; // A moderate number for medium difficulty
      case 'Hard':
        return 18; // More Pokémon for hard difficulty
      default:
        return 6;  // Default to easy if something goes wrong
    }
  }


