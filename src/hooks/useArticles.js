import { useMemo } from "react";
import {
    getAllArticles,
    getArticleBySlug,
    getArticlesByCategory,
    getFeaturedArticles,
    searchArticles,
} from "../services/articleService";

export function useArticles() {
    const articles = useMemo(() => getAllArticles(), []);

    return {
        articles,
        count: articles.length,
    };
}

export function useArticle(slug) {
    const article = useMemo(
        () => getArticleBySlug(slug),
        [slug]
    );

    return {
        article,
        found: Boolean(article),
    };
}

export function useArticlesByCategory(category) {
    const articles = useMemo(
        () => getArticlesByCategory(category),
        [category]
    );

    return {
        articles,
        count: articles.length,
    };
}

export function useFeaturedArticles(limit = 3) {
    const articles = useMemo(
        () => getFeaturedArticles(limit),
        [limit]
    );

    return {
        articles,
        count: articles.length,
    };
}

export function useArticleSearch(query) {
    const articles = useMemo(
        () => searchArticles(query),
        [query]
    );

    return {
        articles,
        count: articles.length,
    };
}