export default function Card({pokemon}) {
    return (
        <div className="card">
            <p>{pokemon.name}</p>
            <p>{pokemon.image}</p>
        </div>
    )
}