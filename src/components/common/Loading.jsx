function Loading({ text = "Loading..." }) {
    return (
        <div className="loading-state" role="status" aria-live="polite">
            <span
                className="loading-spinner"
                aria-hidden="true"
            ></span>

            <span className="loading-text">
                {text}
            </span>
        </div>
    );
}

export default Loading;