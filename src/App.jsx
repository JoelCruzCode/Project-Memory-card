
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import { getRandomPokemon, shufflePokemon, determinePokemonCount } from './pokemon';
import GameOverModal from './components/GameOverModal';
localStorage.clear()
function App() {
  const [difficulty, setDifficulty] = useState('easy');
  const [pokemon, setPokemon] = useState([]);
  const [increment, setIncrement] = useState(0)
  const [scores, setScores] = useState({
    current: 0,
    best: localStorage.getItem('best-score') || 0
})
  const [gameStatus, setGameStatus] = useState({
    start: false,
    end: false, 
    won: false
  })
 
  // TODO might just change callback to useEffect and change "onChange aka initGame to update difficulty and status state"
  // TODO alternatively i can use no hooks at all and just manage the increment change by using D-injection in initGame
  const initializeGame = useCallback((e)=> {
    const value = e.target.value

    setDifficulty(value)

    const pokemonCount = determinePokemonCount(value, increment)
   
    getRandomPokemon(pokemonCount).then((pokemonCards) => {

      const shuffledPokemon = shufflePokemon(pokemonCards, true);

      setPokemon(shuffledPokemon);
  });

  setGameStatus(game => ({...game, start: true, end: false}))
  }, [increment])


  useEffect(()=> {
    // updates increment appropriately on next level
    if(gameStatus.start) {
      initializeGame({target: {value: difficulty}})
    }
    
  }, [increment, difficulty, initializeGame, gameStatus.start])


  useEffect(() => {
    console.log('Pokemon State: ',pokemon)
    console.log('difficulty', difficulty)
    console.log('increment:' ,increment)
  },[pokemon, difficulty, increment])


  function handleClick(e) {
    const id = e.currentTarget.dataset.id

    const clickedPokemon = pokemon.find(poke => poke.id === id);
    if(clickedPokemon.clicked) {

      setGameStatus(game => ({ ...game, end: true})) 
      return
    }

    incrementScore()
    
    const lastCard = pokemon.filter(poke => poke.clicked === false)

    if(lastCard.length === 1) {
      handleWinning()
    }
  

    e.preventDefault()
    setPokemon(prev => (
      shufflePokemon(prev.map(pokemon => pokemon.id === id 
        ? {...pokemon, clicked: true} 
        : pokemon
        )
    )))
  }


  function handleRestart(e) {
    setIncrement(0) // TODO might remove to let user continue at last card count 
    setScores(score => ({
      ...score, current: 0
    }))
    initializeGame(e)
  }

  

  function handleNextLevel(e) {
    console.log(e.target)
    setIncrement(increment => increment + 3)
    // initializeGame(e)
  }


  function handleQuit() {
    setGameStatus(game => ({...game, start: false, end: false}))
    setIncrement(0)
  }

  function incrementScore() {
    const newScore = scores.current + 1
    const newBestScore = Math.max(newScore, scores.best)

    if(newBestScore > scores.best) {
      localStorage.setItem('best-score', newBestScore)
    }
 
    setScores(score => ({
      ...score, current: newScore, best: newBestScore
    }))


  }
  
  function handleWinning() {
    setGameStatus(game => ({
      ...game, end: true, won: true
    }))
  }
  // TODO might have to download animation to handle flipping cards
  // TODO make card only clickable once per animation

  return (
    <main className='main-background'>
      <StartScreen 
        gameStatus={gameStatus}
        onChange={initializeGame} 
        style={{display: gameStatus.start ? 'none': 'block'}}
      />
      {gameStatus.start ? <Game
      gameStatus={gameStatus}
      scores={scores}
      pokemon={pokemon}
      onClick={handleClick}
      
      >
      </Game> : null}
      {gameStatus.end 
      ? <GameOverModal
        gameStatus={gameStatus}
        difficulty={difficulty}
        handleRestart={handleRestart}
        handleNextLevel={handleNextLevel}
        handleQuit={handleQuit}
        setIncrement={setIncrement}
      /> 
      : null}
    </main>
    
  );
}

export default App;