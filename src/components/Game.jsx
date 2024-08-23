import Board from "./Board"
import ScoreBoard from "./ScoreBoard"
export default function Game ({pokemon}) {

    return (
        <main>
            <ScoreBoard></ScoreBoard>
            <Board pokemon={pokemon}></Board>

        </main>
    )
}