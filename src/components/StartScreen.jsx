import MenuOptions from "./MenuOptions"

export default function StartScreen ({gameStatus, onChange, style}) {

    return (
        <div 
        className="start-modal"
        style={style}
        >
            <MenuOptions gameStatus={gameStatus} onChange={onChange}></MenuOptions>
        </div>
    )
}





