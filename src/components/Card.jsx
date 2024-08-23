import cardBackImage from '../assets/images/card-back.png';

export default function Card({pokemon}) {
    return (
        <>
        <div className="card-front">
            <button className="card-button">
            <img className="card-img"src={pokemon.image} alt={pokemon.name} />
            <h3 className="card-info">{pokemon.name}</h3>
            </button>
        </div>
        <div className="card-back">
            <img src={cardBackImage} alt="" />
        </div>
        </>
    )
}