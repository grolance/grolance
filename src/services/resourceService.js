import { resources } from "../data/resources";

export function getAllResources() {
    return resources;
}

export function getResourceBySlug(slug) {
    return resources.find((resource) => resource.slug === slug) || null;
}

export function getFreeResources() {
    return resources.filter((resource) => resource.isFree);
}

export function getFeaturedResources() {
    return resources.filter((resource) => resource.featured);
}

export function getResourcesByType(type) {
    if (!type) {
        return resources;
    }

    return resources.filter(
        (resource) =>
            resource.type.toLowerCase() === type.toLowerCase()
    );
}

export function searchResources(query) {
    if (!query || !query.trim()) {
        return resources;
    }

    const searchTerm = query.toLowerCase().trim();

    return resources.filter((resource) => {
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
}