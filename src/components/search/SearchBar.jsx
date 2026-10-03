function SearchBar({
    value = "",
    onChange,
    onSubmit,
    placeholder = "Search Grolance...",
    autoFocus = false,
}) {
    const query = value;

    const handleChange = (event) => {
        const nextValue = event.target.value;

        if (onChange) {
            onChange(nextValue);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedQuery = query.trim();

        if (!trimmedQuery) {
            return;
        }

        if (onSubmit) {
            onSubmit(trimmedQuery);
        }
    };

    const handleClear = () => {
        if (onChange) {
            onChange("");
        }
    };

    return (
        <form
            className="search-bar"
            onSubmit={handleSubmit}
            role="search"
        >
            <div className="search-bar-input-wrap">
                <input
                    type="search"
                    value={query}
                    onChange={handleChange}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    aria-label="Search Grolance"
                />

                {query && (
                    <button
                        type="button"
                        className="search-bar-clear"
                        onClick={handleClear}
                        aria-label="Clear search"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                )}
            </div>

            <button
                type="submit"
                className="search-bar-submit"
                disabled={!query.trim()}
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;