
import Card from "./Card"

export default function Board ({pokemon}) {
    return (
        <div
        className="board"
        >
            {pokemon.map(poke => (
                <Card key={poke.id} pokemon={poke}></Card>
                ))}
        </div>
    )
}