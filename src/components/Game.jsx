import Card from "./Card"

export default function Game ({pokemon}) {

    return (
        <main>
            <div>
                {pokemon.map(poke => (
                    <Card key={poke.id} pokemon={poke}></Card>
                ))}
            </div>
        </main>
    )
}