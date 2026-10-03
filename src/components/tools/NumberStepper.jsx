import { useState } from "react";

function NumberStepper({
    value,
    onChange,
    min = 0,
    max = 999999,
    step = 1,
    prefix = "",
    suffix = "",
    placeholder = "0",
}) {
    const [inputValue, setInputValue] = useState(value ?? "");

    const updateValue = (nextValue) => {
        const numericValue = Number(nextValue);

        if (Number.isNaN(numericValue)) {
            return;
        }

        const clampedValue = Math.min(
            max,
            Math.max(min, numericValue)
        );

        setInputValue(clampedValue);
        onChange(clampedValue);
    };

    const decrease = () => {
        updateValue(Number(value || 0) - step);
    };

    const increase = () => {
        updateValue(Number(value || 0) + step);
    };

    const handleInputChange = (event) => {
        const rawValue = event.target.value;

        if (rawValue === "") {
            setInputValue("");
            onChange(0);
            return;
        }

        const numericValue = Number(rawValue);

        if (!Number.isNaN(numericValue)) {
            const clampedValue = Math.min(
                max,
                Math.max(min, numericValue)
            );

            setInputValue(rawValue);
            onChange(clampedValue);
        }
    };

    return (
        <div className="number-stepper">
            {prefix && (
                <span className="number-stepper-prefix">
                    {prefix}
                </span>
            )}

            <input
                type="number"
                value={inputValue}
                min={min}
                max={max}
                step={step}
                placeholder={placeholder}
                onChange={handleInputChange}
                onWheel={(event) => event.currentTarget.blur()}
            />

            {suffix && (
                <span className="number-stepper-suffix">
                    {suffix}
                </span>
            )}

            <div className="number-stepper-controls">
                <button
                    type="button"
                    onClick={increase}
                    aria-label="Increase value"
                    disabled={Number(value) >= max}
                >
                    +
                </button>

                <button
                    type="button"
                    onClick={decrease}
                    aria-label="Decrease value"
                    disabled={Number(value) <= min}
                >
                    −
                </button>
            </div>
        </div>
    );
}

export default NumberStepper;