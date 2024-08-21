export default function MenuOptions({onChange}) {
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
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </section>
    );
}

