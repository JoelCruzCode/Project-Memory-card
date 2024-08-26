export default function MenuOptions({ gameStatus, onChange}) {
    const options = ['Easy', 'Medium', 'Hard'];

    return (
        <section>
            <div className="options-container">
                {options.map((option, index) => (
                    <label key={index} htmlFor={`difficulty-${index}`}>
                        <input
                            type="radio"
                            id={`difficulty-${index}`}
                            name="difficulty"
                            value={option}
                            onChange={onChange}
                            checked={gameStatus.start}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </section>
    );
}

