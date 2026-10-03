import { useMemo } from "react";
import {
    searchSite,
    getSearchSuggestions,
} from "../services/searchService";

export function useSearch(query) {
    const results = useMemo(
        () => searchSite(query),
        [query]
    );

    return {
        results,
        hasResults: results.total > 0,
        isEmpty: Boolean(query?.trim()) && results.total === 0,
    };
}

export function useSearchSuggestions(query, limit = 5) {
    const suggestions = useMemo(
        () => getSearchSuggestions(query, limit),
        [query, limit]
    );

    return {
        suggestions,
        hasSuggestions: suggestions.length > 0,
    };
}