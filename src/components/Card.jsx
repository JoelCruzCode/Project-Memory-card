import cardBackImage from '../assets/images/card-back.png';

export default function Card({pokemon, gameStatus ,onClick}) {
    return (
        <>
        <div className="card-front" style={{pointerEvents: gameStatus.end ? 'none' : 'auto'}}>
            <button 
            style={{outline: 'none'}}
            className="card-button" data-id={pokemon.id} onClick={onClick}>
            <img className="card-front-img"src={pokemon.image} alt={pokemon.name} />
            <h3 className="card-info">{pokemon.name}</h3>
            </button>
        </div>
        <div className="card-back"
            style={{display: 'none'}}
        >
            <img className="card-back-img"src={cardBackImage} alt="" />
        </div>
        </>
    )
}