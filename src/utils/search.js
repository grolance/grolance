export function normalizeSearchText(value = "") {
    return value
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
}

export function matchesSearchQuery(text, query) {
    const normalizedText = normalizeSearchText(text);
    const normalizedQuery = normalizeSearchText(query);

    if (!normalizedQuery) {
        return false;
    }

    return normalizedText.includes(normalizedQuery);
}

export function buildSearchableText(item = {}) {
    return [
        item.title,
        item.description,
        item.excerpt,
        item.category,
        item.type,
        item.format,
        item.author?.name,
    ]
        .filter(Boolean)
        .join(" ");
}

export function filterBySearchQuery(items = [], query = "") {
    if (!query || !query.trim()) {
        return items;
    }

    return items.filter((item) =>
        matchesSearchQuery(buildSearchableText(item), query)
    );
}