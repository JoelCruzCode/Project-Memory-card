import MenuOptions from "./MenuOptions"

export default function StartScreen ({onChange, style}) {

    return (
        <div 
        className="display-Modal"
        style={style}
        >
            <MenuOptions onChange={onChange}></MenuOptions>
        </div>
    )
}





