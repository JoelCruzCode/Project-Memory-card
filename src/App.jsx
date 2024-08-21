
import { useEffect, useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import { getRandomPokemon, shufflePokemon, determinePokemonCount } from './pokemon';

function App() {
  const [difficulty, setDifficulty] = useState('easy');
  const [pokemon, setPokemon] = useState([]);
  const [startGame, setStartGame] = useState(false)

  // change name to loadGame? 
  function initializeGame(e) {
    const value = e.target.value
    setDifficulty(value)

    const pokemonCount = determinePokemonCount(value)

    getRandomPokemon(pokemonCount).then((pokemonCards) => {
      // console.log('Fetched Pokemon:', pokemonCards);
      const shuffledPokemon = shufflePokemon(pokemonCards);
      // console.log('shuffle', shuffledPokemon)
      setPokemon(shuffledPokemon);
  });

  setStartGame(true)
  }

  useEffect(() => {
    console.log('Pokemon State: ',pokemon)
    console.log('difficulty', difficulty)
  },[pokemon, difficulty])

  return (
    <>
      <StartScreen 
        onChange={initializeGame} 
        style={{display: startGame ? 'none': 'block'}}
      />
      {startGame ? <Game
      pokemon={pokemon}
      >
      </Game> : null}
      {/* Render the Pokémon cards or other components here */}
    </>
  );
}

export default App;