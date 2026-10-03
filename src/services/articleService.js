import { articles } from "../data/articles";

export function getAllArticles() {
    return articles;
}

export function getArticleBySlug(slug) {
    return articles.find((article) => article.slug === slug) || null;
}

export function getArticlesByCategory(category) {
    if (!category) {
        return articles;
    }

    return articles.filter(
        (article) =>
            article.category.toLowerCase() === category.toLowerCase()
    );
}

export function getFeaturedArticles(limit = 3) {
    return articles.slice(0, limit);
}

export function searchArticles(query) {
    if (!query || !query.trim()) {
        return articles;
    }

    const searchTerm = query.toLowerCase().trim();

    return articles.filter((article) => {
        const searchableText = [
            article.title,
            article.excerpt,
            article.category,
            article.author?.name,
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return searchableText.includes(searchTerm);
    });
}