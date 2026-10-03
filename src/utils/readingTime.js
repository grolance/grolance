export function calculateReadingTime(text = "") {
    const words = text
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    const wordsPerMinute = 200;

    const minutes = Math.ceil(words.length / wordsPerMinute);

    return Math.max(1, minutes);
}

export function formatReadingTime(text = "") {
    const minutes = calculateReadingTime(text);

    return `${minutes} MIN READ`;
}