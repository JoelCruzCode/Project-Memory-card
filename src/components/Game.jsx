import Board from "./Board";
import ScoreBoard from "./ScoreBoard";

export default function Game({ pokemon, gameStatus, scores, onClick }) { 
  return (
    <div>
      <ScoreBoard scores={scores}/>
      <Board 
      pokemon={pokemon}  
      onClick={onClick} 
      gameStatus={gameStatus}
      /> 
    </div>
  );
}