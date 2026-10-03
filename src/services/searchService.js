import { getAllArticles } from "./articleService";
import { getAllResources } from "./resourceService";

export function searchSite(query) {
    if (!query || !query.trim()) {
        return {
            articles: [],
            resources: [],
            total: 0,
        };
    }

    const searchTerm = query.toLowerCase().trim();

    const articles = getAllArticles().filter((article) => {
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

    const resources = getAllResources().filter((resource) => {
        const searchableText = [
            resource.title,
            resource.description,
            resource.type,
            resource.format,
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return searchableText.includes(searchTerm);
    });

    return {
        articles,
        resources,
        total: articles.length + resources.length,
    };
}

export function getSearchSuggestions(query, limit = 5) {
    if (!query || !query.trim()) {
        return [];
    }

    const searchTerm = query.toLowerCase().trim();

    const articleSuggestions = getAllArticles()
        .filter((article) =>
            article.title.toLowerCase().includes(searchTerm)
        )
        .map((article) => ({
            type: "article",
            title: article.title,
            slug: article.slug,
        }));

    const resourceSuggestions = getAllResources()
        .filter((resource) =>
            resource.title.toLowerCase().includes(searchTerm)
        )
        .map((resource) => ({
            type: "resource",
            title: resource.title,
            slug: resource.slug,
        }));

    return [...articleSuggestions, ...resourceSuggestions].slice(0, limit);
}