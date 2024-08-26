
    export default function GameOverModal ({gameStatus, difficulty, handleRestart, handleNextLevel, handleQuit}) {

        return (
            <div 
            className="end-modal"
            // style={style}
            > 
            {gameStatus.won && 
                         <label htmlFor="play-again">
                         <input 
                         type="radio"
                         id="play-again"
                         value={difficulty}
                         onChange={(e)=> {
                            handleNextLevel(e)
                         }}
                     
                         />
                         <span>Next Level?</span>
                     </label>}
                <h2>Game Over</h2>
                <label htmlFor="restart">
                    <input 
                    type="radio"
                    id="restart"
                    value={difficulty}
                    onChange={(e) => {
                        handleRestart(e)}}
                
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