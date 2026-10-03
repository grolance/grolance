import ArticleCard from "./ArticleCard";

function RelatedArticles({
    articles = [],
    currentArticleId,
    limit = 3,
}) {
    const relatedArticles = Array.isArray(articles)
        ? articles
            .filter((article) => article?.id !== currentArticleId)
            .slice(0, limit)
        : [];

    if (!relatedArticles.length) {
        return null;
    }

    return (
        <section
            className="related-articles"
            aria-labelledby="related-articles-title"
        >
            <div className="related-articles-header">
                <span className="section-kicker">
                    KEEP READING
                </span>

                <h2 id="related-articles-title">
                    More ideas worth
                    <span> exploring.</span>
                </h2>
            </div>

            <div className="related-articles-grid">
                {relatedArticles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                    />
                ))}
            </div>
        </section>
    );
}

export default RelatedArticles;