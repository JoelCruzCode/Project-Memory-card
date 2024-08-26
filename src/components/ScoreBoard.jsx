
export default function ScoreBoard ({scores}) {

    return (
        <div className="score-board">           
            <p className="current-score score-info">Score: {scores.current}</p>
            <p className="high-score score-info">High Score: {scores.best}</p>
        </div>
    )
}