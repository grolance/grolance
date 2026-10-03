function SearchEmpty({ query = "", onClear }) {
    return (
        <div className="search-empty">
            <div
                className="search-empty-icon"
                aria-hidden="true"
            >
                ?
            </div>

            <span className="section-kicker">
                NO RESULTS
            </span>

            <h2>
                Nothing found
                {query && (
                    <>
                        {" "}
                        for <span>"{query}"</span>
                    </>
                )}
            </h2>

            <p>
                Try a different keyword or search for another business
                idea, insight or resource.
            </p>

            {onClear && (
                <button
                    type="button"
                    className="search-empty-action"
                    onClick={onClear}
                >
                    Clear search
                    <span>→</span>
                </button>
            )}
        </div>
    );
}

export default SearchEmpty;