
import Card from "./Card";

export default function Board({ pokemon, gameStatus, onClick }) { 
  return (
    <div 
    className="board"
    >
      {pokemon.map(poke => (
        <Card key={poke.id} pokemon={poke} gameStatus={gameStatus} onClick={onClick} /> 
      ))}
    </div>
  );
}
