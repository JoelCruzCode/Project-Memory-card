
    export default function GameOverModal ({difficulty, handleRestart, handleQuit}) {

        return (
            <div 
            className="end-modal"
            // style={style}
            >
                <h2>Game Over</h2>
                <label htmlFor="restart">
                    <input 
                    type="radio"
                    id="restart"
                    value={difficulty}
                    onChange={handleRestart}
                
                    />
                    <span>Play Again?</span>
                </label>
                <label htmlFor="quit">
                    <input 
                    type="radio"
                    id="quit"
                    value='quit'
                    onChange={handleQuit}
                    />
                    <span>Quit?</span>
                </label>
               
            </div>
        )
    }